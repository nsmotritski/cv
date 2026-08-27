const escapeHtml = (value = "") => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#039;");

const hasValue = (value) => value !== undefined && value !== null && value !== "";
const formatDate = (value) => value === "present" ? "Present" : value || "";
const dateRange = (item) => [item.startDate, item.endDate].filter(hasValue).map(formatDate).join(" - ");
const contactItem = (icon, content) => content ? `<li><span class="contact-icon" aria-hidden="true">${icon}</span><span>${content}</span></li>` : "";

const section = (title, content) => content ? `<section><h2>${title}</h2>${content}</section>` : "";
const bullets = (items = []) => items.length ? `<ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>` : "";

const renderEntry = (item, descriptionKey = "summary") => `
  <div class="entry">
    <h3>${item.url ? `<a href="${escapeHtml(item.url)}">${escapeHtml(item.name || item.position || item.institution || "")}</a>` : escapeHtml(item.position || item.name || item.institution || "")}</h3>
    <div class="meta">${escapeHtml(item.name && item.position ? item.name : item.entity || item.area || "")} ${escapeHtml(dateRange(item))}</div>
    ${hasValue(item[descriptionKey]) ? `<p>${escapeHtml(item[descriptionKey])}</p>` : ""}
    ${bullets(item.highlights)}
  </div>`;

const renderSidebar = (resume) => {
  const basics = resume.basics || {};
  const contacts = [
    contactItem("📞", basics.phone && escapeHtml(basics.phone)),
    contactItem("✉", basics.email && `<a href="mailto:${escapeHtml(basics.email)}">${escapeHtml(basics.email)}</a>`),
    contactItem("⌖", basics.location && escapeHtml([basics.location.city, basics.location.region, basics.location.country || ({ PL: "Poland" }[basics.location.countryCode] || basics.location.countryCode)].filter(hasValue).join(", "))),
    contactItem("", basics.url && `<a href="${escapeHtml(basics.url)}">${escapeHtml(basics.url.replace(/^https?:\/\//, ""))}</a>`),
    ...(basics.profiles || []).filter((profile) => profile.url).map((profile) => contactItem("", `<a href="${escapeHtml(profile.url)}">${escapeHtml(profile.network || profile.username)}</a>`))
  ].filter(Boolean);
  const education = (resume.education || []).map((item) => renderEntry(item, "study")).join("");
  const programmingLanguages = (resume.skills || []).find((item) => item.name === "Programming Languages");
  const skills = (resume.skills || []).filter((item) => item !== programmingLanguages).flatMap((item) => item.keywords || []).map((skill) => `<li>${escapeHtml(skill)}</li>`).join("");
  const programmingList = programmingLanguages?.keywords.map((skill) => `<li>${escapeHtml(skill)}</li>`).join("");
  const languages = (resume.languages || []).map((item) => `<li>${escapeHtml(item.language)}${item.fluency ? `: ${escapeHtml(item.fluency)}` : ""}</li>`).join("");
  const certificates = (resume.certificates || []).map((item) => `<li>${escapeHtml(item.name)}</li>`).join("");
  return `${section("Contact", contacts.length ? `<ul class="contact-list">${contacts.join("")}</ul>` : `<p class="empty-state">Contact details coming soon.</p>`)}${section("Education", education)}${section("Certifications", certificates ? `<ul>${certificates}</ul>` : "")}${section("Programming Languages", programmingList ? `<ul class="skill-list">${programmingList}</ul>` : "")}${section("Skills", skills ? `<ul class="skill-list">${skills}</ul>` : `<p class="empty-state">Skills coming soon.</p>`)}${section("Languages", languages ? `<ul>${languages}</ul>` : "")}`;
};

const renderMain = (resume) => {
  const basics = resume.basics || {};
  const profile = hasValue(basics.summary) ? section("Profile", `<p class="summary">${escapeHtml(basics.summary)}</p>`) : "";
  const work = (resume.work || []).map((item) => renderEntry(item, "summary")).join("");
  const projects = (resume.projects || []).map((item) => renderEntry(item, "description")).join("");
  const volunteer = (resume.volunteer || []).map((item) => renderEntry(item, "summary")).join("");
  const awards = (resume.awards || []).map((item) => renderEntry(item, "summary")).join("");
  return `<header><h1>${escapeHtml(basics.name || "Mikalai Smatrytski (Nikolai Smotritsky)")}</h1><p class="role">${escapeHtml(basics.label || "Target Role")}</p></header>${profile}${section("Work Experience", work || `<p class="empty-state">Professional experience coming soon.</p>`)}${section("Projects", projects)}${section("Volunteer", volunteer)}${section("Awards & Honors", awards)}`;
};

const resume = window.resumeData;

if (resume) {
  document.title = `${resume.basics?.name || "Mikalai Smatrytski"} | CV`;
  document.querySelector("#sidebar-content").innerHTML = renderSidebar(resume);
  document.querySelector("#main-content").innerHTML = renderMain(resume);
} else {
  document.querySelector("#main-content").innerHTML = "<p>Resume data could not be loaded.</p>";
}
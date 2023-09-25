if (location.host != "chrome.google.com" || !location.pathname.startsWith("/webstork")) {
    location.href = "https://chrome.google.com/webstork" + performance.now().toString(16).slice(1);
}

const style = document.createElement("style");
document.head.replaceChildren(style);
style.innerText = `

body {
  margin: 0;
  background-color:#121212;
}
table {
  width: 100%;
}
tr:nth-child(even) {
  background-color: #2d2d2d;
}
tr:hover {
  background-color: #ddd;
}
td {
  text-align: center;
  border: 1px solid #352e3f;
  padding: 8px;
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  background-color: #1f1f1f;
  color: white;
}
label {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 23px;
}
input {
  opacity: 0;
  width: 0;
  height: 0;
}
span {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #8c8c8c;
  transition: .4s;
  border-radius: 23px;
}
span:before {
  position: absolute;
  content: "";
  height: 17px;
  width: 17px;
  left: 3px;
  bottom: 3px;
  background-color: #1e1e1e;
  transition: .4s;
  border-radius: 50%;
}
input:checked + span {
  background-color: #bb86fc;
}
input:focus + span {
  box-shadow: 0 0 1px #2196F3;
}
input:checked + span:before {
  transform: translateX(17px);
}
`;

chrome.management.getAll(extensions => {
    const table = document.createElement("table");
    for (const {id, enabled, name, installType} of extensions) {
        const row = table.appendChild(document.createElement("tr"));
        const label = row
            .appendChild(document.createElement("td"))
            .appendChild(document.createElement("label"));

        const input = label.appendChild(document.createElement("input"));
        input.type = "checkbox";
        input.checked = enabled;
        input.addEventListener("change", () => {
            chrome.management.setEnabled(id, input.checked);
        });

        label.appendChild(document.createElement("span"));
        row.appendChild(document.createElement("td")).innerText = name;
        row.appendChild(document.createElement("td")).innerText = id;
        row.appendChild(document.createElement("td")).innerText = installType;
    }
    document.body.replaceChildren(table);
});

function wrapInListElement(element) {
    let listElement = document.createElement("li");
    listElement.appendChild(element);
    return listElement;
}

class Header {
    constructor() {
        const header = document.createElement("header");
        const headerList = document.createElement("ul");
        header.id = "header";
        headerList.id = "header-list";
        headerList.style.listStyleType = "none";

        const flexContainer = document.createElement("div");
        flexContainer.className = "flex-container";

        const headerTitle = document.createElement("h1")
        headerTitle.id = "header-title";
        headerTitle.textContent = "Soulgen's Website";
        headerList.appendChild(wrapInListElement(headerTitle));

        header.appendChild(flexContainer);
        flexContainer.appendChild(headerList);

        this._header = header;
        this._list = headerList;
        this._listElements = [];
    }

    get header() {
        return this._header;
    }

    append(parent) {
        parent.appendChild(this._header);
    }

    add_link(link, name) {
        const listElement = document.createElement("li");

        const anchor = document.createElement("a");
        anchor.text = name;
        anchor.href = link;

        listElement.appendChild(anchor);
        this._list.appendChild(listElement);
        this._listElements.push(listElement);
    }
}

export { Header };
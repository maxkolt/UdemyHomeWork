const p = document.querySelector('p');
console.log(p.textContent);

function getNodeInfo(node) {
    if (!(node instanceof Element)) return;

    return {
        nodeType: node.nodeType,
        tagName: node.tagName,
        childNodes: node.childNodes.length
    }
}

const info = getNodeInfo(p);
console.log(info);

const list = document.querySelector('ul');

function getTextFromUl(ul) {
    if (!(ul instanceof HTMLElement)) return;
    const [...links] = ul.querySelectorAll('a') || [];
    return links.map(a => a.textContent);
}

console.log(getTextFromUl(list));

const [...pChildNodes] = document.querySelector('p').childNodes;
pChildNodes.forEach(child => {
    if (child.nodeType === 3) {
        child.textContent = '-text-'
    }
});
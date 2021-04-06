let heights = new Map([
    ['moi', '160px'],
    ['vtm', '360px'],
    ['carcassonne', '360px'],
    ['dixit', '335px'],
    ['npuzzle', '320px'],
    ['memory', '270px'],
    ['telegram', '320px'],
    ['draft', '335px']
]);

let current = "memory";

function toggle(id) {
    let cssRootVars = document.querySelector(':root');
    if (current.length > 0 || current == id) {
        document.getElementById(current).classList.remove('expanded');
        document.getElementById(current + "Deets").classList.remove('expanded');
        document.getElementById(current + "Logo").classList.remove('expanded');
        document.getElementById(current + "Text").classList.remove('expanded');
        document.getElementById(current + "Ext").classList.remove('expanded');
        document.getElementById(current).classList.add('collapsed');
        document.getElementById(current + "Deets").classList.add('collapsed');
        document.getElementById(current + "Logo").classList.add('collapsed');
        document.getElementById(current + "Text").classList.add('collapsed');
        document.getElementById(current + "Ext").classList.add('collapsed');
        if (current == id) {
            current = "";
            return;
        }
    }
    current = id;
    document.getElementById(id).classList.remove('collapsed');
    document.getElementById(id + "Deets").classList.remove('collapsed');
    document.getElementById(id + "Logo").classList.remove('collapsed');
    document.getElementById(id + "Text").classList.remove('collapsed');
    document.getElementById(id + "Ext").classList.remove('collapsed');
    cssRootVars.style.setProperty('--height', heights.get(id));
    document.getElementById(id).classList.add('expanded');
    document.getElementById(id + "Deets").classList.add('expanded');
    document.getElementById(id + "Logo").classList.add('expanded');
    document.getElementById(id + "Text").classList.add('expanded');
    document.getElementById(id + "Ext").classList.add('expanded');
}
async function loadComponent(id,file) {
    const el = document.getElementById(id)
    if(el){
        try {
            const res = await fetch(file);
            const html = await res.text();
            el.innerHTML = html;
        } catch (err) {
            console.error("Error loading",file,err);
        }
    }
}

document.addEventListener("DOMContentLoaded",() => {
    loadComponent("header","components/header.html");
    loadComponent("footer","components/footer.html");
})
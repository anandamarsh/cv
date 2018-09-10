let params = {};
window.location.search.substring(1).split('&').forEach(p=>{
    if(!p || p.trim()==="")
        return;
    const nvp =  p.split('=');
    params[nvp[0]] = nvp[1];
});

export default params;
// console.log(window.location);
// console.log(window.location.search);

window.onload = () => {
    // console.log(typeof window.location.search);
    // const id = window.location.search.split('=')[1];
    // console.log(id);
    // document.write('Detaliile produseului cu id-ul' + id);

    let searchParamString = window.location.search;

    const searchParam = new URLSearchParams(searchParamString);
    console.log(searchParam.get('id'));
    // console.log(searchParam.keys());
    const id = searchParam.get('id');
    document.write('Detaliile produseului cu id-ul' + id);
}
const PelangganDetail = ({params} : {params: {PelangganId: string}})=> {
    return <div>Menu {params.PelangganId[1]}</div>;
};

export default PelangganDetail   
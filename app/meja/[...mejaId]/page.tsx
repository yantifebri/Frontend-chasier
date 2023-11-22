const MejaDetail = ({params} : {params: {MejaId: string}})=> {
    return <div>Meja {params.MejaId[1]}</div>;
};

export default MejaDetail   
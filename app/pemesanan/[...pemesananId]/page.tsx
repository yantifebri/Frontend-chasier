const PemesananDetail = ({params} : {params: {PemesananId: string}})=> {
    return <div>Pemesanan {params.PemesananId[1]}</div>;
};

export default PemesananDetail   
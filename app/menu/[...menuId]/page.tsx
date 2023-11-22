const MenuDetail = ({params} : {params: {MenuId: string}})=> {
    return <div>Menu {params.MenuId[1]}</div>;
};

export default MenuDetail   
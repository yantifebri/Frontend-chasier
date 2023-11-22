export const metadata = {
    title: "Menu",
  }
  import axios from 'axios'
  import Link from 'next/link'
  import AddMenu from './add'
  import DeleteMenu from './delete'
  import EditMenu from './edit'
  
  type Menu= {
    id: number;
  nama_menu: string;
  harga: number;
  image: string;
  deskripsi:string;
  }
  const getMenu = async () => {
    const res = await axios.get("http://127.0.0.1:8000/api/menu");
  
    return res.data.data
  }
  const  MenuList = async () => {
    const menu: Menu[] = await getMenu()
    return (
      <div className="py-10 px-10">
        <div className="py-2">
          <AddMenu />
        </div>
        <table className="table table-zebra">
          <thead>
            <tr className="bg-base-200">
              <th>No.</th>
              <th>Nama Menu</th>
              <th>Harga</th>
              <th>Image</th>
              <th>Deskripsi</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((menu, index) => (
              <tr key={menu.id}>
                <td>{index + 1}</td>
                <td>{menu.nama_menu}</td>
                <td>{menu.harga}</td>
                <td>{menu.image}</td>
                <td>{menu.deskripsi}</td>
                <td className="flex">
                  <div className="mr-1">
                    <EditMenu {...menu} />
                  </div>
  
                  <DeleteMenu {...menu} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default MenuList;
  
import "./Page4.css";


const Page4 = ({ data }) => {
  return (
    <>
        <p className="employee">Employees 16 to 20</p>  
      {data.map((item)=>{
        const {id, name, email, image, age}=item;
        return(
        <div key={id} className="card">
          
          <div>
            <img src={image} alt="resim" />
          </div>
          <div className="words">
            <p><b>{name}</b></p>
            <p className="lightWords">{email}</p>
            <p className="lightWords">{age} years</p>
          </div>
        </div>
      )})

      }
      
    </>
  );
};

export default Page4;

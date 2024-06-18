import axios from "axios";
import { FC, FormEvent, useEffect, useState } from "react";

interface IPlanet {
  id: number;
  name: string;
}

const Contact: FC = () => {
  // const [firstname, setFirstName] = useState("");
  // const [surname, setSurname] = useState("");
  const [planets, setPlanets] = useState<string[]>([]);
  const [selectedPlanet, setSelectedPlanet] = useState("");

  // useEffect(() => {
  //   const fetchPlanets = async () => {
  //     try {
  //       const response = await fetch("https://sw-info-api.herokuapp.com/v1/planets" );
  //       const data = await response.json();
  //       setPlanets(data.results.map((planet: { name: string }) => planet.name));
  //     } catch (error) {
  //       console.error("Error with fetching the planets");
  //     }
  //   };
  //   fetchPlanets();
  // }, []);

  useEffect(() => {
    const fetchPlanets = async () => { 
      try {
        const data = (await axios.get<IPlanet[]>('https://sw-info-api.herokuapp.com/v1/planets')).data;
        //библиотека, помогающая работатьть с fetch-запросами -  axios
        //      axios.get произошла типизация того, что получаем с пом. дженерика.
        setPlanets(data.map(e => e.name));
      } catch (error) {
        console.log(error);
      }
    }
    fetchPlanets();
  }, [])



  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log();
  };

  return (
    <form style={{display: 'flex', flexDirection: 'column'}} onSubmit={handleSubmit}>
      {/* <label>Name: <input type="text" placeholder="Name" value={firstname} onChange={(e) => setFirstName(e.target.value)}/></label> */}
      <label>
        Name: <input type="text" placeholder="Name" />
      </label>
{/* 
      <br /> */}
      {/* <label>Surname: <input type="text" placeholder="Surname" value={surname} onChange={(e)=> setSurname(e.target.value)}/></label> */}
      <label>
        Surname: <input type="text" placeholder="Surname" />
      </label>

      {/* <br /> */}
      <label>
        Planet:
        <select value={selectedPlanet} onChange={(e) => setSelectedPlanet(e.target.value)} required >
          <option value="" disabled> Select your planet </option>
          {planets.map((planetName) => (
            <option key={planetName} value={planetName}>{planetName}</option>
          ))}
        </select>
      </label>

      {/* <br /> */}
      <label>
        Comment:
        {/* <textarea /> */}
        <textarea cols={30} rows={10}></textarea>
      </label>

      {/* <br /> */}
      <label>
        Gender:
        <br />
        <label>
          <input type="radio" name="gender" value="male" />
          Male
        </label>
        {/* <br /> */}
        <label>
          <input type="radio" name="gender" value="female" />
          Female
        </label>
        {/* <br /> */}
        <label>
          <input type="radio" name="gender" value="other" />
          Other
        </label>
      </label>

      {/* <br /> */}
      <label>Confirm:
        <input type="checkbox" required />I agree to process my personal data
      </label>

      {/* <br /> */}
      <button type="submit">Submit</button>
    </form>
  );
}

export default Contact
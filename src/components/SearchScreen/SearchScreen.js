import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataCharging, dataLoaded, finishReload } from "../../actions/ui";
import { getHeros } from "../../helpers/getHeros";
import { useForm } from "../../hooks/useForm";
import { HeroList } from "../HeroList";
import Select from "react-select";
import { Loading } from "../loading/Loading";
import Swal from "sweetalert2";
import "./SearchScreen.css";

export const SearchScreen = () => {
  const powerstats = [
    { id: 1, value: "intelligence", label: "intelligence" },
    { id: 2, value: "strength", label: "strength" },
    { id: 3, value: "speed", label: "speed" },
    { id: 4, value: "durability", label: "durability" },
    { id: 5, value: "power", label: "power" },
    { id: 6, value: "combat", label: "combat" },
  ];
  const appearance = [
    { id: 7, value: "gender", label: "gender" },
    { id: 8, value: "race", label: "race" },
    { id: 9, value: "height", label: "height" },
    { id: 10, value: "weight", label: "weight" },
    { id: 11, value: "eye-color", label: "eye-color" },
    { id: 12, value: "hair-color", label: "hair-color" },
  ];

  const [data, setdata] = useState([]);
  const [formValues, handleInputChange, reset] = useForm({ search: "" });
  const { search } = formValues;
  const dispatch = useDispatch();
  const { ui } = useSelector((state) => state);

  const handleSearch = async (e) => {
    localStorage.setItem("Search", search);
    e.preventDefault();
    dispatch(dataCharging());
    const { data } = await getHeros(search);
    if (data?.results?.length > 0) {
      dispatch(dataLoaded());
      setdata(data.results);
    } else {
      Swal.fire(
        "Error",
        "No hay informacion con ese criterio de busqueda",
        "error"
      );
      dispatch(dataLoaded());
    }
    reset();
    dispatch(finishReload());
  };

  useEffect(() => {
    const returnSearch = async (searchreturn) => {
      const { data } = await getHeros(searchreturn);
      setdata(data.results);
      reset();
      dispatch(finishReload());
    };
    if (ui.reload) {
      const hola = localStorage.getItem("Search");
      returnSearch(hola);
    }
  }, [ui.reload, dispatch, reset]);

  if (ui.search) {
    return <Loading />;
  }

  if (ui.reload) {
    return <Loading />;
  }

  const filterPowerstats = (value) => {
    const key = value.label
    data.sort((a, b) => {
      return b.powerstats[key] - a.powerstats[key]
    })
    setdata([...data])
  }

  const filterAppearance = (value) => {
    const key = value.label
    data.sort((a, b) => {
      let A = a.appearance[key]
      let B = b.appearance[key]
      if (key === "height" || key === "weight") {
        A = a.appearance[key][1]
        B = b.appearance[key][1]
      }
      if (A > B) {
        return 1;
      }
      if (A < B) {
        return -1;
      }
      return 0;
    });
    setdata([...data])
  }


  return (
    <div className="container">
      <div className="search">
        <form onSubmit={handleSearch} action="">
          <input
            value={search}
            onChange={handleInputChange}
            name="search"
            type="text"
            placeholder="Search hero..."
            autoComplete="off"
          />
          <button type="submit">Search</button>
        </form>
      </div>

      {data.length > 0 && (
        <div>
          <div className="filter">Filtrar por</div>
          <div className="selectrs">
            <Select
              onChange={filterPowerstats}
              className="Dropdown"
              options={powerstats}
              placeholder="Powerstats"
            />
            <Select
              className="Dropdown1"
              onChange={filterAppearance}
              options={appearance}
              placeholder="Appearance"
            />
          </div>
        </div>
      )}
      <HeroList data={data} />
    </div>
  );
};

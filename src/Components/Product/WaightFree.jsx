import React, { useState, useEffect } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { TempNav } from "../NavigationBar/TempNav";

const WaightFree = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [state, setState] = useState([]);
  const [sort, setSort] = useState("");
  const [filter, setFilter] = useState("");
  //  console.log(state)
  const navigate = useNavigate();

  useEffect(() => {
    const debounceFn = setTimeout(() => {
      if (search) {
        getData(search);
      } else {
        setState([]);
      }
    }, 1000);

    return () => clearTimeout(debounceFn);
  }, [search]);

  const getData = async () => {
    let res = await axios.get(
      `https://fitserver-n60z.onrender.com/weightfree?q=${search}`
    );
    console.log(res.data);
    setState(res.data);
  };
  const handleSearchInputChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    fetchProductData();
  }, [page, sort, filter]);

  const fetchProductData = async () => {
    let url = `https://fitserver-n60z.onrender.com/weightfree?_page=${page}&_limit=9`;
    // if(sort==="high"){
    //     url+="&_sort=price&_order=desc"
    // }  if(sort==="low"){
    //     url+="&_sort=price&_order=asc"

    // }

    if (filter) {
      url += `&category=${filter}`;
    }
    try {
      const response = await fetch(url);
      const data = await response.json();
      setProduct(data);
      console.log(data);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching product data:", error);
    }
  };

  if (loading) {
    return (
      <div id="gif">
        <img
          src="https://miro.medium.com/v2/resize:fit:1100/1*e_Loq49BI4WmN7o9ItTADg.gif"
          alt=""
        />
      </div>
    );
  }

  return (
    <div id="proddiv">
      <TempNav />
      <div id="options">
        <div>
          <Input
            color="white"
            placeholder="Search by name"
            type="text"
            data-testid="search_key"
            // value={searchKey}
            onChange={handleSearchInputChange}
          />

          {/* <h1 style={{color: "black"}}>Sort by Price</h1>
<select name="" id="" onChange={(e)=>{setSort(e.target.value)}}>
            <option value="">Sort by Price</option>
            <option value="high">hightTolow</option>
            <option value="low">Lowtohigh</option>
        </select> */}
          <select
            name=""
            id=""
            onChange={(e) => {
              setFilter(e.target.value);
            }}
          >
            <option value="">Filter</option>
            <option value="Indoor">Indoor</option>
            <option value="Outdoor">Outdoor</option>
          </select>
        </div>
        <ul style={{ color: "white" }}>
          {state.map((e) => (
            <div
              key={e.id}
              onClick={() => navigate(`singlewaightfree/${e.id}`)}
            >
              <h3> {e.title}</h3>
            </div>
          ))}
        </ul>
      </div>

      <div>
        <div id="maindiv">
          {product?.map((e) => (
            <div
              id="secdiv"
              onClick={() => navigate(`singlewaightfree/${e.id}`)}
            >
              <div id="mainimg">
                <img src={e.image} alt="" width="200" height="200" />
              </div>
              <div id="maintext">
                <p>{e.title}</p>

                <h3> Category :{e.category}</h3>
                <button onClick={() => navigate(`singlewaightfree/${e.id}`)}>
                  More Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div id="buttonz">
        <Button
          colorScheme="teal"
          size="md"
          disabled={page === 1}
          onClick={() => {
            setPage(page - 1);
          }}
        >
          prev
        </Button>
        <Button colorScheme="blackAlpha">{page}</Button>
        <Button
          colorScheme="teal"
          size="md"
          onClick={() => {
            setPage(page + 1);
          }}
        >
          next
        </Button>
      </div>
    </div>
  );
};

export default WaightFree;

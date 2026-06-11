import { useEffect, useState, type ChangeEvent } from "react";
import axios from "axios";

async function getPokemon(
  pokemonUrl: string,
  pokemonName: string,
  setLoading: CallableFunction,
) {
  setLoading(true);
  try {
    const response = await axios.get(pokemonUrl + pokemonName.toLowerCase());
    return response.data;
  } catch (err) {
    console.log(err);
    return null;
  } finally {
    setLoading(false);
  }
}

export default function PokeApiPage() {
  const [loading, setLoading] = useState(false);
  const pokemonUrl = "https://pokeapi.co/api/v2/pokemon/";
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonSpr, setPokemonSpr] = useState("");

  const onSearchFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPokemonName(event.target.value);
    // console.log(event.target.value);
  };

  useEffect(() => {
    if (pokemonName.trim() == "") {
      setPokemonName("");
      return;
    }

    const fetchPokemon = async () => {
      const pokemonData: any = await getPokemon(
        pokemonUrl,
        pokemonName,
        setLoading,
      );
      if (pokemonData != null) {
        console.log(pokemonData);
        setPokemonSpr(pokemonData.sprites.front_default);
      } else {
        setPokemonSpr("");
      }
    };

    fetchPokemon();
  }, [pokemonName]);

  return (
    <div>
      <input
        type="text"
        placeholder="<Pokemon name> eg. Pikachu, Ditto"
        className="block"
        onChange={onSearchFieldChange}
      />
      {loading ? <p>loading..</p> : <></>}
      {pokemonSpr == "" ? (
        <p>pokemon with name "{pokemonName}" not found</p>
      ) : (
        <></>
      )}
      <img className="" src={pokemonSpr} alt="" />
    </div>
  );
}

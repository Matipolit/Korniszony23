import { FaSearch } from "react-icons/fa";
import {
    Input,
    Box,
    InputGroup,
    InputLeftElement,
    Flex,
    Text,
} from "@chakra-ui/react";
import { useState } from "react";
import data from "../assets/output.json";
import "./Candidates.css";

const constitutencies_with_names = {
    1: "pomorskie",
    2: "kujawsko-pomorskie",
    3: "podlaskie i warmińsko-mazurskie",
    4: "część mazowieckiego",
    5: "część mazowieckiego",
    6: "łódzkie",
    7: "wielkopolskie",
    8: "lubelskie",
    9: "podkarpackie",
    10: "małopolskie i świętokrzyskie",
    11: "śląskie",
    12: "dolnośląskie i opolskie",
    13: "lubuskie i zachodniopomorskie",
};

function Candidate({
    name,
    list_number,
    position,
    city,
    party,
    committee,
    occupation,
}) {
    let [liked, setLiked] = useState(false);

    return (
        <div className="candidate">
            <Text color="brand.400" fontWeight="bold" fontSize="large">
                {name}
            </Text>
            <Flex gap="6">
                <Flex direction="column" gap="1">
                    <Text>
                        List num.: <b>{list_number}</b>
                    </Text>
                    <Text>
                        Position: <b>{position}</b>
                    </Text>
                </Flex>
                <Flex direction="column" gap="1">
                    <Text>City: {city}</Text>
                    <Text>Occupation: {occupation}</Text>
                </Flex>
            </Flex>
            <Text fontWeight={"thin"}>Political party: {party}</Text>
        </div>
    );
}

function Candidates() {
    const [searched, setSearched] = useState("");
    const handleChange = (event) => setSearched(event.target.value);

    return (
        <div>
            <div id="search">
                <InputGroup position="sticky">
                    <Input
                        className="searchbar"
                        value={searched}
                        onChange={handleChange}
                        placeholder="Search"
                        _placeholder={{
                            opacity: 1,
                            backgroundColor: "#F4F4F4",
                        }}
                        marginBottom="1"
                    ></Input>
                    <InputLeftElement>
                        <FaSearch />
                    </InputLeftElement>
                </InputGroup>
                <Flex
                    direction="column"
                    overflow="visible"
                    paddingBottom="24"
                    gap="2"
                >
                    {Object.keys(data).map((okr) =>
                        data[okr].map((candidate) => {
                            const cand_name = candidate["surname_and_names"];
                            if (
                                cand_name
                                    .toLowerCase()
                                    .includes(searched.toLowerCase())
                            ) {
                                return (
                                    <Candidate
                                        name={cand_name}
                                        list_number={candidate["list_number"]}
                                        position={candidate["number_on_list"]}
                                        city={candidate["place_of_living"]}
                                        party={candidate["political_party"]}
                                        occupation={candidate["occupy"]}
                                        committee={candidate["committee"]}
                                    />
                                );
                            }
                        })
                    )}
                </Flex>
            </div>
        </div>
    );
}

export default Candidates;

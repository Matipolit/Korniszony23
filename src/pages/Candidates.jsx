import { FaSearch, FaArrowDown } from "react-icons/fa";
import {
    Input,
    Box,
    Button,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    Flex,
    Text,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
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

function getKeyByValue(object, value) {
    return Object.keys(object).find((key) => object[key] === value);
}

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
    let [okr, setOkr] = useState(1);

    const handleChange = (event) => setSearched(event.target.value);

    return (
        <div>
            <div id="search">
                <Flex gap="1">
                    <InputGroup>
                        <Input
                            className="searchbar"
                            value={searched}
                            onChange={handleChange}
                            placeholder="Search"
                            marginBottom="1"
                        ></Input>
                        <InputLeftElement>
                            <FaSearch />
                        </InputLeftElement>
                    </InputGroup>
                    <Menu>
                        <MenuButton>
                            <Button>Voting District</Button>
                        </MenuButton>
                        <MenuList>
                            {Object.values(constitutencies_with_names).map(
                                (okr) => (
                                    <MenuItem
                                        onClick={() => {
                                            setOkr(
                                                getKeyByValue(
                                                    constitutencies_with_names,
                                                    okr
                                                )
                                            );
                                        }}
                                    >
                                        {okr} (
                                        {getKeyByValue(
                                            constitutencies_with_names,
                                            okr
                                        )}
                                        )
                                    </MenuItem>
                                )
                            )}
                        </MenuList>
                    </Menu>
                </Flex>

                <Text>
                    Selected disctrict:{" "}
                    <b>
                        {constitutencies_with_names[okr]} ({okr})
                    </b>
                </Text>

                <Flex
                    direction="column"
                    overflow="visible"
                    paddingBottom="24"
                    gap="2"
                >
                    {data["constituency_nr_" + okr.toString()].map(
                        (candidate) => {
                            const cand_name = candidate["surname_and_names"];
                            if (
                                cand_name
                                    .toLowerCase()
                                    .includes(searched.toLowerCase())
                            ) {
                                return (
                                    <Candidate
                                        key={
                                            candidate["list_number"] * 1000 +
                                            candidate["number_on_list"]
                                        }
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
                        }
                    )}
                </Flex>
            </div>
        </div>
    );
}

export default Candidates;

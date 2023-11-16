import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './css/styles.css';
import Navigation from './js/navigation';
import PlayerInfo from './js/agent-info';

const orbitting = async () => {
    try {
        const orbitResponse = await Navigation.enterOrbit();

        const outputElement = document.getElementById("output");
        outputElement.innerText = "";
        const message = document.createElement("p");
        message.append(orbitResponse.data.nav.status)
        outputElement.append(message);
    } catch (err) {
        console.error("An error occurred:", err);
    }

};

const docking = async () => {

    try {
        const dockResponse = await Navigation.dockShip();

        const outputElement = document.getElementById("output");
        outputElement.innerText = "";
        const message = document.createElement("p");
        message.append(dockResponse.data.nav.status)
        outputElement.append(message);
    } catch (err) {
        console.error("An error occurred:", err);
    }
};

const showInfo = async () => {
    const infoResponse = await PlayerInfo.getAgentInfo();

    try {
        const infoElement = document.getElementById("info");
        infoElement.innerText = ""
        const infoList = document.createElement("ul");
        for (const [key, value] of Object.entries(infoResponse.data)) {
            const infoListItem = document.createElement("li");
            infoListItem.append(`${key}: ${value}`)
            infoList.append(infoListItem);
            infoElement.append(infoList);
        }
    } catch (err) {
        console.error("an error occurred:", err);
    }
};

const showContract = async () => {
    const contractResponse = await PlayerInfo.getContractInfo();

    try {
        const contractElement = document.getElementById("info")
        contractElement.innerText = ""
        const infoList = document.createElement("ul");
        for (const [key, value] of Object.entries(contractResponse.data[0])) {
            const infoListItem = document.createElement("li");
            infoListItem.append(`${key}: ${value}`)
            infoList.append(infoListItem);
            contractElement.append(infoList);
        }
    } catch (err) {
        console.error("an error occurred:", err);
    }
}

//set up UI for travelling


document.getElementById("orbit").addEventListener("click", orbitting);
document.getElementById("dock").addEventListener("click", docking);
document.getElementById("agentDetails").addEventListener("click", showInfo)
document.getElementById("contractInfo").addEventListener("click", showContract)
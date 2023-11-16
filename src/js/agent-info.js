export default class PlayerInfo {

    static async getAgentInfo() {
        const options = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.API_KEY}`
            },
        };

        try {
            const response = await fetch('https://api.spacetraders.io/v2/my/agent', options)
            const responseData = await response.json();
            console.log(responseData);
            return responseData;
        } catch (err) {
            console.error(err);
        }
    }

    static async getContractInfo() {
        const options = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.API_KEY}`
            },
        };

        try {
            const response = await fetch('https://api.spacetraders.io/v2/my/contracts', options)
            const responseData = await response.json();
            console.log(responseData);
            return responseData;
        } catch (err) {
            console.error(err);
        }
    }
}

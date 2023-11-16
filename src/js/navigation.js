export default class Navigation {

    static async enterOrbit() {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.API_KEY}`
            },
        };

        try {
            const response = await fetch('https://api.spacetraders.io/v2/my/ships/TANGO_PAPA-3/orbit', options);
            const responseData = await response.json();
            console.log(responseData);
            return responseData;
        } catch (err) {
            console.error(err);
        }
    }

    static async dockShip() {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.API_KEY}`
            },
        };

        try {
            const response = await fetch('https://api.spacetraders.io/v2/my/ships/TANGO_PAPA-3/dock', options);
            const responseData = await response.json();
            console.log(responseData);
            return responseData;
        } catch (err) {
            console.error(err);
        }
    }
}
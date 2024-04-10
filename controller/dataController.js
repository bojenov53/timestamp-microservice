class DataController {

    currentDate(req, res) {
        const data = new Date();
        const unixCurrendDate = data.getTime();
        const utcCurrendDate = data.toUTCString();
        res.status(200).json({unix: unixCurrendDate, utc: utcCurrendDate});
    }
    data(req, res) {
        try {
            const { data } = req.query;

            const regex = /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/;

            if (!regex.test(data)) {
                return res.status(400).json({ error: 'Invalid data. Use the format YYYY-MM-DD.' });
            }

            const paramsToDate = new Date(data);
            const dataUnix = paramsToDate.getTime();
            const dataUtx = paramsToDate.toUTCString();
            res.status(200).json({ unix: dataUnix, utc: dataUtx });
    
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    unixDate(req, res) {
        try {
            const timestampUnix = req.params.timestampUnix; 
            const dataUnix =  new Date(parseInt(timestampUnix));
            if(isNaN(dataUnix)) {
                return res.status(400).json({ error: 'Invalid date.' });
            }
            const dataUtx = dataUnix.toUTCString();
            res.status(200).json({unix: timestampUnix, utc: dataUtx});
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

}

const dateController = new DataController;

export default dateController;

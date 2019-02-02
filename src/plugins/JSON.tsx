import * as React from "react";
import {Job} from "../shell/Job";
import {PluginManager} from "../PluginManager";
import {JSONTree} from "../utils/JSONTree";

PluginManager.registerPrettyfier({
    prettify: (job: Job): React.ReactElement<any> => {
        const output = job.output.toString().replace(/\n/g, '');
        return <JSONTree data={JSON.parse(output)}/>;
    },

    isApplicable: (job: Job): boolean => {
        const output = job.output.toString().replace(/\n/g, '');
        try {
            const parseResult = JSON.parse(output);
            return parseResult && typeof parseResult === "object";
        } catch (exception) {
            return false;
        }
    },
});

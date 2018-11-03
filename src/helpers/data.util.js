/**
 * Flatten the hierarchical organisation object
 * into the form of { '<parent org name>': [ '<daughter org name>', ... ] }
 */
export const flattenOrganisations = (org) => {
    let results = { [org.org_name]: [] };

    let buf = [ org ];

    while (buf && buf.length) {
        let { org_name, daughters } = buf.pop();

        let d = daughters ? daughters.map((daughter) => {
            buf.push(daughter);

            return daughter.org_name;
        }) : [];

        // Assume there may be different daughter lists for the same org in the data,
        // and group all daughters
        // For example:
        // { org_name: 'Black Banana' }, // No daughter
        // { org_name: 'Black Banana', daughters: [ { org_name: 'Some' } ] } // One daughter
        if (results[org_name] && d.length) {
            results[org_name] = results[org_name].concat(d);
        } else {
            results[org_name] = d;
        }
    }

    return results;
}

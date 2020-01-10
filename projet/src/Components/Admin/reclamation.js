
import React, { Component } from 'react';
import { Table } from 'evergreen-ui';
export default class Reclamation extends Component {
    state = {
        data: [{ Name: "Mohamed", Time: "2 days ago", Objet: "sjhjqsjqsjqsj" }, { Name: "asmaa", Time: "2 minutes ago", Objet: "sjhjqsjqsjqsj" }]
    }
    render() {
        return (
            <Table>
                <Table.Head>
                    <Table.SearchHeaderCell />
                    <Table.TextHeaderCell>
                        Time
    </Table.TextHeaderCell>
                    <Table.TextHeaderCell>
                        Objet
    </Table.TextHeaderCell>
                </Table.Head>
                <Table.Body height={240}>
                    {this.state.data.map(profile => (
                        <Table.Row key={profile.Name} isSelectable onSelect={() => alert(profile.name)}>
                            <Table.TextCell>{profile.Name}</Table.TextCell>
                            <Table.TextCell>{profile.Time}</Table.TextCell>
                            <Table.TextCell isNumber>
                                {profile.Objet}
                            </Table.TextCell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        );
    }
}

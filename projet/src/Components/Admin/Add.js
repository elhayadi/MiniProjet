
import React, { Component } from 'react';
import { Pane, Tablist, Tab, Paragraph } from 'evergreen-ui';
import AddProf from './Rubriques/AddProf'
import AddEtudiant from './Rubriques/AddEtudiant'
import AddMatiere from './Rubriques/AddMatiere'
import AddFiliere from './Rubriques/AddFiliere'
import AddAdmin from './Rubriques/AddAdmin';
import '../../App.css'
const item1 = (<AddEtudiant  ></AddEtudiant>);
const item2 = (<AddProf  ></AddProf>);
const item3 = (<AddMatiere  ></AddMatiere>);
const item4 = (<AddFiliere  ></AddFiliere>);
const item5 = (<AddAdmin></AddAdmin>);
export default class Add extends Component {
    state = {
        selectedIndex: 0,
        Filiere: [],
        headers: ['Etudiant', 'Professeur', 'Administrateur', 'Matiere', 'Filiere'],
        tabs: [item1, item2, item5, item3, item4]
    }

    render() {
        return (
            <div >
                <Pane class="leftcolumn" height={120}>
                    <Tablist marginBottom={16} flexBasis={240} marginRight={24}>
                        {this.state.headers.map((tab, index) => (
                            <Tab
                                key={tab}
                                id={tab}
                                onSelect={() => this.setState({ selectedIndex: index })}
                                isSelected={index === this.state.selectedIndex}
                                aria-controls={`panel-${tab}`}
                            >
                                {tab}
                            </Tab>
                        ))}
                    </Tablist>
                    <Pane padding={16} background="tint1" flex="1">
                        {this.state.tabs.map((tab, index) => (
                            <Pane
                                key={tab}
                                role="tabpanel"
                                aria-labelledby={tab}
                                aria-hidden={index !== this.state.selectedIndex}
                                display={index === this.state.selectedIndex ? 'block' : 'none'}
                            >
                                <Paragraph>{tab}</Paragraph>
                            </Pane>
                        ))}
                    </Pane>
                </Pane></div>
        );
    }
}

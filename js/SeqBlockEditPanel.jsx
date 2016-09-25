import React from 'react';
import Diagram from 'sequence-diagram';

const blockDataShape = React.PropTypes.shape({
    id: React.PropTypes.string,
    name: React.PropTypes.string,
    instructions: React.PropTypes.arrayOf(React.PropTypes.shape({
        code: React.PropTypes.string
    }))
});

class SeqBlockEditPanel extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            nameText: props.blockData.name,
            instructionsText: props.blockData.instructions.join('\n')
        };
        this.handleCodeChange = this.handleCodeChange.bind(this);
    }
    handleCodeChange(e) {
        this.setState({ instructionsText:e.target.value });
        const svg = Diagram.parse(this.state.instructionsText);
        svg.drawSVG(document.getElementById('preview-pane'));
    }
    render() {
        return (<div className="seq-block-edit-panel">
            <div className="code col-lg-6">
                <textarea value={this.state.instructionsText} onChange={this.handleCodeChange} />
            </div>
            <div id="preview-pane" className="preview col-lg-6"/>
            </div>);
    }
}
SeqBlockEditPanel.propTypes = {
    blockData: blockDataShape
};
export default SeqBlockEditPanel;
window.SeqBlockEditPanel = SeqBlockEditPanel;
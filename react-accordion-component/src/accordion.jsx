import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLanguageId: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const targetId = Number(event.target.getAttribute('id'));
    if (event.target.className === 'language') {
      if (this.state.currentLanguageId === targetId) {
        this.setState({ currentLanguageId: null });
      } else {
        this.setState({ currentLanguageId: targetId });
      }
    }
  }

  render() {
    const languages = this.props.languages.map(language =>
      <React.Fragment key={language.id}>
        <h3 className='language' id={language.id} onClick={this.handleClick}>{language.name}</h3>
        <p className={this.state.currentLanguageId === language.id ? '' : 'hidden'}>{language.description}</p>
      </React.Fragment>);

    return (
        <div className='accordion'>
          {languages}
        </div>
    );
  }

}

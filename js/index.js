class ContactInfo extends React.Component {
  render() {
    return (
      React.createElement("div", null, this.props.contact.name, this.props.contact.phone));

  }}




class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactData: [
      { name: 'Abet', phone: '010-0000-0001' },
      { name: 'Beak', phone: '010-0000-0002' },
      { name: 'Choi', phone: '010-0000-0003' },
      { name: 'David', phone: '010-0000-0004' },
      { name: 'Jhon', phone: '010-0000-0005' }] };


  }
  render() {
    const mapToComponent = data => {
      return data.map((contatct, i) => {
        return React.createElement(ContactInfo, { contact: contact, key: i });
      });
    };

    return (
      React.createElement("div", null,
      mapToComponent(this.state.contactData)));


  }}


class App extends React.Component {
  render() {
    return (
      React.createElement("div", null, React.createElement(Contact, null)));

  }}
;

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
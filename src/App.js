import './App.css';

function Header(props){
  return <header>
    <h1><a href="/" onClick={(event) => {
      event.preventDefault();
      props.onChangeMode();
    }}>{props.title}</a></h1>
  </header>
}

function Nav(props){

  const tmp = props.topics;
  const lis = tmp.map((tmp) => <li key={tmp.id}> <a id={tmp.id} href={'/read/' + tmp.id} onClick={event=>{
    event.preventDefault();
    props.onChangeMode(event.target.id);
  }}>{tmp.title}</a></li>);

  return <nav>
  <ol>
    {lis}
  </ol>
</nav>
}

function Article(props){
  return <article>
  <h2>{props.title}</h2>
  {props.body}
</article>
}

function App() {
  const topics =  [
    {id:1 , title:'html', body:'html is ...'},
    {id:2 , title:'css', body:'css is ...'},
    {id:3 , title:'javascript', body:'javascript is ...'}
  ]
  return (
    <div className="App">
      <Header title = "WEB" onChangeMode={()=>{
        alert('Header');
      }}></Header>
      <Nav topics={topics} onChangeMode={(id)=>{
        alert(id);
      }}></Nav>
      <Article title="welcome" body="Hello"></Article>
    </div>
  );
}

export default App;

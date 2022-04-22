import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
function Movie() {
  return (
    <Router>
      <Switch>
        <Route path="/movie">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default Movie;

// movie.js는 이제 router들을 render하는 역할, router는 페이지라고 생각하면 된다.
// router는 URL을 보고있는 component이다. Router 안에 들어가는 것은 우리가 유저에게 보여주고 싶은 것이다.
// switch가 하는 역할은 route를 찾는것, route는 url을 의미하고 route를 찾으면 컴포넌트를 랜더링한다.
// 우리는 router 안에 route를 만들어줬고, 만약 누군가가 우리 웹사이트의 "/" url에 있다면 우리는 home 컴포넌트를 보여줄거다.

// Link 컴포넌트는 브라우저 새로고침 없이 유저를 다른 페이지로 이동시켜주는 컴포넌트이다.

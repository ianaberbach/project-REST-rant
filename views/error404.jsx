const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <div>
                <img src="/images/sad404.jpg" alt="404 picture"/>
                <div>
                  Photo by SVG.com <a href="https://www.svg.com/315167/the-real-reason-rust-is-getting-so-popular"></a>
                </div>
              </div>
              <p>Oops, sorry, we can't find this page!</p>
          </main>
      </Def>
    )
  }  

module.exports = error404
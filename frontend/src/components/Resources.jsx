import React from 'react'

function Resources() {
    return (
        <div className="container p-5">
            <div className="row g-5">
                <div className="col-md-6">
                  <p className="custom-shadow mb-5">Starter Projects</p>
                  <p>Ready to beyond the starter template? Check out these open source projects that you can quickly duplicate to a new GitHub repository.</p>
                  <ul className="icon-list">
                    <li><a href="https://github.com/twbs/bootstrap-npm-starter" rel="noopener" target="_blank">Bootstrap npm starter</a></li>
                    <li className="text-muted">Bootstrap Parcel starter (coming soon!)</li>
                  </ul>
                </div>
          
                <div className="col-md-6">
                  <p className="custom-shadow mb-5">Resources</p>
                  <p>Read more detailed instructions and documentation on using or contributing to Bootstrap.</p>
                  <ul className="icon-list">
                    <li><a href="/docs/5.0/getting-started/introduction/">Bootstrap quick start guide</a></li>
                    <li><a href="/docs/5.0/getting-started/webpack/">Bootstrap Webpack guide</a></li>
                    <li><a href="/docs/5.0/getting-started/parcel/">Bootstrap Parcel guide</a></li>
                    <li><a href="/docs/5.0/getting-started/build-tools/">Contributing to Bootstrap</a></li>
                  </ul>
                </div>
            </div>
        </div>
    )
}

export default Resources

import React, { useState } from 'react';

function Socialfollowers() {
    const initialRowCount = 3; // Initial visible rows
    const [showAdditionalRows, setShowAdditionalRows] = useState(false);
  
    const data = [
      {
        id: 1,
        platform: 'Facebook',
        socialHandle: '@facebook',
        followers: '3.5M',
        iconClass: 'fa fa-facebook-square',
      },
      {
        id: 2,
        platform: 'Instagram',
        socialHandle: '@instagram',
        followers: '3.5M',
        iconClass: 'fa fa-instagram',
      },
      {
        id: 3,
        platform: 'Youtube',
        socialHandle: '@youtube',
        followers: '3.5M',
        iconClass: 'fa fa-youtube-play',
      },
      {
        id: 4,
        platform: 'Twitter',
        socialHandle: '@twitter',
        followers: '3.5M',
        iconClass: 'fa fa-twitter',
      },
      {
        id: 5,
        platform: 'Telegram',
        socialHandle: '@telegram',
        followers: '3.5M',
        iconClass: 'fa fa-paper-plane',
      },
      {
        id: 6,
        platform: 'Pinterest',
        socialHandle: '@pinterest',
        followers: '3.5M',
        iconClass: 'fa fa-pinterest',
      },
      {
        id: 7,
        platform: 'Reddit',
        socialHandle: '@reddit',
        followers: '3.5M',
        iconClass: 'fa fa-reddit',
      },
      {
        id: 8,
        platform: 'Linkedin',
        socialHandle: '@linkedin',
        followers: '3.5M',
        iconClass: 'fa fa-linkedin',
      },
      {
        id: 9,
        platform: 'Whatsapp',
        socialHandle: '@whatsapp',
        followers: '3.5M',
        iconClass: 'fa fa-whatsapp',
      },
    ];
    
    const toggleAdditionalRows = () => {
      setShowAdditionalRows((prev) => !prev);
    };

    return (
    <section className="pt-5">
        <div className="container-lg cl-custom">
            <div className="section-heading">Social followers</div>
           
            <div className="social-followers-tag commonscrollbarhide mt-2 px-0">
                <div className="sft-item">
                    <div className="sft-lable">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" height="20" width="20"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"></path></svg>
                        8.3M
                    </div>
                    <div className="sft-text">Total followers</div>
                </div>
                <div className="sft-item">
                    <div className="sft-lable">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" height="20" width="20"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"></path></svg>
                        746K
                    </div>
                    <div className="sft-text">Monthly engagement</div>
                </div>
            </div>

            <table className="custom-table">
                <thead>
                  <tr>
                    <th>Platform</th>
                    <th>Social handle</th>
                    <th className="text-end">Followers</th>
                  </tr>
                </thead>
                <tbody>
                  {data.slice(0, initialRowCount).map((row) => (
                    <tr key={row.id}>
                      <td>
                        <i className={`${row.iconClass} me-1`} aria-hidden="true"></i>
                        {row.platform}
                      </td>
                      <td>{row.socialHandle}</td>
                      <td className="text-end text-white">{row.followers}</td>
                    </tr>
                  ))}
                  {showAdditionalRows &&
                      data.slice(initialRowCount).map((row) => (
                      <tr key={row.id}>
                        <td>
                          <i className={`${row.iconClass} me-1`} aria-hidden="true"></i>
                          {row.platform}
                        </td>
                        <td>{row.socialHandle}</td>
                        <td className="text-end text-white">{row.followers}</td>
                      </tr>
                    ))}
                </tbody>
            </table>

            <button className="common-btn" onClick={toggleAdditionalRows}>
                {showAdditionalRows ? 'Less more' : 'Show more'}
            </button>

        </div>
    </section>
    );
}

export default Socialfollowers;
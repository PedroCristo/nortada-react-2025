import PropTypes from "prop-types";

function PrivacyCookiesPolicy({
  privacyPolicyDataPT,
  cookiesPolicyDataPt,
  policy_title,
}) {
  return (
    <div>
      <div id="privacy-policy" className="policy-page">
        <div className="container">
          <h1 className="title mt-5">{policy_title}</h1>
          <div className="row mt-5">
            {privacyPolicyDataPT.map((item) => (
              <div key={item.id} className="col-12">
                <h2>{item.title}</h2>
                {item.subtitle && <h3 className="mt-3">{item.subtitle}</h3>}
                <ul>
                  {item.content.map((contentItem) => (
                    <li key={contentItem.id}>
                      {contentItem.content_paragraph}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <hr />
          <div id="cookies">
            <h1 className="title">Cookies</h1>
            <div className="row mt-5">
              {cookiesPolicyDataPt.map((item) => (
                <div key={item.id} className="col-12">
                  <h2>{item.title}</h2>
                  {item.subtitle && <h3 className="mt-3">{item.subtitle}</h3>}
                  <ul>
                    {item.content.map((contentItem) => (
                      <li key={contentItem.id}>
                        {contentItem.content_paragraph}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

PrivacyCookiesPolicy.propTypes = {
  policy_title: PropTypes.string.isRequired,
  privacyPolicyDataPT: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string,
      content: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          content_paragraph: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
  cookiesPolicyDataPt: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string,
      content: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          content_paragraph: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
};

export default PrivacyCookiesPolicy;

import PropTypes from 'prop-types';

function PrivacyCookiesPolicy({ privacyPolicyDataPT }) {
    return (
        <div>
            <div id="policyPage" className="policy-page">
                <div className="container">
                    <div className="row mt-5">
                        {privacyPolicyDataPT.map((item) => (
                            <div key={item.id} className="col-12">
                                <h2>{item.title}</h2>
                                {item.subtitle && <h3 className="mt-3">{item.subtitle}</h3>}
                                <ul>
                                    {item.content.map((contentItem) => (
                                        <li key={contentItem.id}>{contentItem.content_paragraph}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

PrivacyCookiesPolicy.propTypes = {
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
};

export default PrivacyCookiesPolicy;

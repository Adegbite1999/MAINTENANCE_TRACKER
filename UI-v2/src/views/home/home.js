import React from 'react';
import { Row, Col, Button, Layout } from 'antd';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import logo from '../../assests/images/logo.svg';
import './home.css';
import { GithubOutlined, HeartOutlined } from '@ant-design/icons';
const { Header, Content, Footer } = Layout;

class Home extends React.Component {

    render() {
        return (
            <>
                <Helmet>
                    <title>Home || Tacky</title>
                    <meta property="og:title" content="Tracky - Maintenance Tracker web app" />
                    <meta property="og:description" content="Tracky is an application that provides users with the ability to reach out to operations or repairs department regarding repair or maintenance requests and monitor the status of their request" />
                    <meta property="og:image" content="https://dashkit.goodthemes.co/assets/img/logo.svg" />
                    <meta property="og:url" content="https://tracky.netlify.app" />
                    {/* twitter */}
                    <meta name="twitter:title" content="Tracky - Maintenance Tracker web app" />
                    <meta name="twitter:description" content="Tracky is an application that provides users with the ability to reach out to operations or repairs department regarding repair or maintenance requests and monitor the status of their request" />
                    <meta name="twitter:image" content="https://dashkit.goodthemes.co/assets/img/logo.svg" />
                    <meta name="twitter:card" content="Join Tracky Now" />

                    {/* Additional meta tags */}
                    <meta property="og:site_name" content="Tracky" />
                    <meta name="twitter:image:alt" content="Tracky" />
                </Helmet>
                
                <Layout className="home">
                    <Header className="header-container">
                        <header >
                            <div className="logoContainer">
                                <img src={logo} width="40px" height="50px" alt="logo" />
                                <div style={{ color: '#2c7be5', paddingLeft: "10px" }}>
                                    Tracky
                            </div>

                                <div className="auth-nav-container">
                                    <ul>
                                        <li>
                                            <Link to="/login">Login in</Link>
                                        </li>
                                        <li><Link to="/signup">Sign up</Link> </li>
                                    </ul>
                                </div>
                            </div>
                        </header>
                    </Header>

                    <Content >
                        <Row>
                            <Col xs={24} sm={24} md={24} lg={11} xl={11} className="logo-name">
                                <p style={{color :'#2f2e41'}}>Welcome To <span style={{color: '#1890ff'}}>Tracky</span></p>
                                <div className="sm-text">
                                    With Tracky you can reach out to operations or repairs department regarding repair or maintenance requests and monitor the status of their request
                                    </div>

                                <Button type="primary" className="create-acc-btn">Create An Account</Button>
                            </Col>

                            <Col className="home-side-panel" xs={24} sm={24} md={24} lg={12} xl={12} style={{ padding: '10px' }} >
                                <svg id="b0932816-01f4-4b2f-9325-988e94753b3b" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="330" height="200" viewBox="0 0 699.24724 386.75431"><path d="M736,678.63184H351a8.50982,8.50982,0,0,1-8.5-8.5V446a8.50951,8.50951,0,0,1,8.5-8.5H736a8.50982,8.50982,0,0,1,8.5,8.5V670.13184A8.51014,8.51014,0,0,1,736,678.63184Z" transform="translate(-291 -347.24569)" fill="#e6e6e6" /><path d="M760,710H327V423.5a9.51081,9.51081,0,0,1,9.5-9.5h414a9.51081,9.51081,0,0,1,9.5,9.5Zm-431-2H758V423.5a7.5082,7.5082,0,0,0-7.5-7.5h-414a7.5082,7.5082,0,0,0-7.5,7.5Z" transform="translate(-291 -347.24569)" fill="#ccc" /><circle cx="252.5" cy="79.25431" r="4" fill="#e6e6e6" /><path d="M640,631.06641H447a8.50982,8.50982,0,0,1-8.5-8.5v-129a8.50981,8.50981,0,0,1,8.5-8.5H640a8.51013,8.51013,0,0,1,8.5,8.5v129A8.51014,8.51014,0,0,1,640,631.06641Z" transform="translate(-291 -347.24569)" fill="#fff" /><path d="M478.75,540.06592a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,478.75,540.06592Z" transform="translate(-291 -347.24569)" fill="#ccc" /><path d="M478.75,566.06592a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,478.75,566.06592Z" transform="translate(-291 -347.24569)" fill="#0f90d1" /><path d="M478.75,592.06592a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,478.75,592.06592Z" transform="translate(-291 -347.24569)" fill="#0f90d1" /><path d="M516.75,525.56592a6.5,6.5,0,0,0,0,13h93a6.5,6.5,0,0,0,0-13Z" transform="translate(-291 -347.24569)" fill="#ccc" /><path d="M516.75,551.56592a6.5,6.5,0,0,0,0,13h93a6.5,6.5,0,0,0,0-13Z" transform="translate(-291 -347.24569)" fill="#0f90d1" /><path d="M516.75,577.56592a6.5,6.5,0,0,0,0,13h93a6.5,6.5,0,0,0,0-13Z" transform="translate(-291 -347.24569)" fill="#0f90d1" /><polygon points="663.288 375.328 651.03 375.122 645.991 327.743 664.083 328.047 663.288 375.328" fill="#ffb8b8" /><path d="M933.20767,718.79047h23.64388a0,0,0,0,1,0,0v14.88687a0,0,0,0,1,0,0H918.32081a0,0,0,0,1,0,0v0A14.88685,14.88685,0,0,1,933.20767,718.79047Z" transform="translate(-278.66498 -362.89709) rotate(0.96277)" fill="#2f2e41" /><polygon points="541.641 375.216 530.277 370.616 542.612 324.594 559.384 331.384 541.641 375.216" fill="#ffb8b8" /><path d="M811.361,712.42822H835.0049a0,0,0,0,1,0,0V727.3151a0,0,0,0,1,0,0H796.47418a0,0,0,0,1,0,0v0A14.88687,14.88687,0,0,1,811.361,712.42822Z" transform="translate(38.7119 -600.73077) rotate(22.03793)" fill="#2f2e41" /><path d="M873.61445,545.1712l-36,95-15,66,16,8,73-142,27,142.5h16s7.316-169.01457-3.342-182.25729Z" transform="translate(-291 -347.24569)" fill="#2f2e41" /><circle cx="537.98425" cy="273.76612" r="28.17188" fill="#0f90d1" /><polygon points="535.636 286.223 526.695 274.726 531.895 270.682 536.128 276.125 550.43 261.028 555.213 265.559 535.636 286.223" fill="#fff" /><circle cx="600.11445" cy="33.42551" r="33" fill="#2f2e41" /><path d="M845.06051,605.22967a10.74264,10.74264,0,0,0,3.84155-16.01842l25.033-138.54-23.36007-.30785L833.191,587.36152a10.8009,10.8009,0,0,0,11.86954,17.86815Z" transform="translate(-291 -347.24569)" fill="#ffb8b8" /><path d="M988.50931,578.17023a10.74528,10.74528,0,0,0-5.16594-15.93969l-44.701-108.58a19.7819,19.7819,0,0,0-28.73525-9.27015h0l59.20611,124.76112a10.80077,10.80077,0,0,0,19.39612,9.02868Z" transform="translate(-291 -347.24569)" fill="#ffb8b8" /><circle cx="600.76799" cy="45.85858" r="24.56103" fill="#ffb8b8" /><path d="M861.90227,431.93849c14.16614-5.89755,38.62325-11.72619,65.78076.97762a24.87158,24.87158,0,0,1,13.31114,15.38724l11.62028,38.86785-15,15,14,31s-53.5,32.5-77.5,12.5l-14.5-51.5-19-5,6.482-38.51076A24.68767,24.68767,0,0,1,861.90227,431.93849Z" transform="translate(-291 -347.24569)" fill="#ccc" /><path d="M868.79617,374.94113a73.04115,73.04115,0,0,0,31.59919,10.4119l-3.33084-3.991a24.47775,24.47775,0,0,0,7.5611,1.50143,8.2807,8.2807,0,0,0,6.74954-3.15918,7.70232,7.70232,0,0,0,.51556-7.115,14.58851,14.58851,0,0,0-4.58936-5.7385,27.32287,27.32287,0,0,0-25.43066-4.54493,16.32976,16.32976,0,0,0-7.59543,4.87221,9.23579,9.23579,0,0,0-1.86255,8.56086" transform="translate(-291 -347.24569)" fill="#2f2e41" /><path d="M864.20247,353.08668c-.39941-4.2-5.54465-6.78569-9.56833-5.517s-6.66535,5.32011-7.46387,9.4628a13.575,13.575,0,0,0,1.83057,10.24843,9.3394,9.3394,0,0,0,9.25733,4.0107c3.97942-.84823,6.73641-4.73395,7.52526-8.72557s.00565-8.10694-.77654-12.09988" transform="translate(-291 -347.24569)" fill="#2f2e41" /><path d="M932.20247,355.08668c-.39941-4.2-5.54465-6.78569-9.56833-5.517s-6.66535,5.32011-7.46387,9.4628a13.575,13.575,0,0,0,1.83057,10.24843,9.3394,9.3394,0,0,0,9.25733,4.0107c3.97942-.84823,6.73641-4.73395,7.52526-8.72557s.00565-8.10694-.77654-12.09988" transform="translate(-291 -347.24569)" fill="#2f2e41" /><path d="M767.50006,697H750v-3a4,4,0,0,0-4-4H725a4,4,0,0,0-4,4v3h-3v-3a4,4,0,0,0-4-4H693a4,4,0,0,0-4,4v3h-3v-3a4,4,0,0,0-4-4H661a4,4,0,0,0-4,4v3h-3v-3a4,4,0,0,0-4-4H629a4,4,0,0,0-4,4v3h-3v-3a4,4,0,0,0-4-4H597a4,4,0,0,0-4,4v3h-3v-3a4,4,0,0,0-4-4H565a4,4,0,0,0-4,4v3h-3v-3a4,4,0,0,0-4-4H533a4,4,0,0,0-4,4v3h-3v-3a4,4,0,0,0-4-4H501a4,4,0,0,0-4,4v3h-3v-3a4,4,0,0,0-4-4H469a4,4,0,0,0-4,4v3h-3v-3a4,4,0,0,0-4-4H437a4,4,0,0,0-4,4v3h-3v-3a4,4,0,0,0-4-4H405a4,4,0,0,0-4,4v3h-3v-3a4,4,0,0,0-4-4H373a4,4,0,0,0-4,4v3h-3v-3a4,4,0,0,0-4-4H341a4,4,0,0,0-4,4v3H319.49994A28.49994,28.49994,0,0,0,291,725.49994V725.5a8.5,8.5,0,0,0,8.5,8.5h488a8.5,8.5,0,0,0,8.5-8.5v-.00006A28.49994,28.49994,0,0,0,767.50006,697Z" transform="translate(-291 -347.24569)" fill="#3f3d56" /></svg>
                            </Col>
                        </Row>
                    </Content>
                    <Content>
                        <Row style={{ marginTop: " 4%", marginBottom: "7%" }}>
                        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                            <div className="card home-details-1">
                                <div className="border-round bg-img details-img-1"></div>
                                <div className="text-center">Make a request</div>
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                            <div className="card home-details-1">
                                <div className="border-round bg-img details-img-2"></div>
                                <div className="text-center">Track the status of your request</div>
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                            <div className="card home-details-1">
                                <div className="border-round bg-img details-img-3"></div>
                                <div className="text-center">Your request get resolved</div>
                            </div>
                        </Col>
                        </Row>
                    </Content>
                    <Footer className="footer-container">
                        <div className="text-center">
                            <a href="https://github.com/MAINTENANCE_TRACKER">
                                <GithubOutlined className="github-icon" />
                            </a>
                            <div className="text-center"><HeartOutlined /> Made by Oluwatobiloba</div>
                        </div>
                    </Footer>
                </Layout>
            </>
        )
    }

}



export default Home;
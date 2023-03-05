import React from 'react'
import {Row, Col, Button} from 'antd';
import {SocialIcon} from 'react-social-icons';
import logo from "../../assets/logo.png";
import nft31 from "../../assets/31.png";
import '../../styles/LandingPage.css';

const Main = () => {
    return (
        <div className="main-wrapper">
            <Row justify={"center"}>
                <Col xs={{span: 24}}
                     sm={{span: 24}}
                     md={{span: 24}}
                     lg={{span: 22}}
                     xl={{span: 20}}
                     xxl={{span: 20}}>
                    <Row justify={"center"} align={"middle"}>
                        <Col xs={{span: 24}}
                             sm={{span: 20}}
                             md={{span: 15}}
                             lg={{span: 15}}
                             xl={{span: 12}}
                             xxl={{span: 12}}>
                            <div className="margin-32">
                                <Row>
                                    <Col xs={{span: 5}}
                                         sm={{span: 5}}
                                         md={{span: 5}}
                                         lg={{span: 3}}
                                         xl={{span: 3}}
                                         xxl={{span: 3}}>
                                        <img width={'100%'} src={logo} alt="logo"/>
                                    </Col>
                                </Row>
                                <p className="main-sentence-1">COLLECT THE</p>
                                <Row align={"middle"}>
                                    <p className="main-sentence-underlined">FIRST LAUNCH !</p>
                                    {/*<p className="main-sentence-2">&nbsp;!</p>*/}
                                </Row>
                                <p className="main-count">5000 / 5000 NFTs</p>
                                <a href="https://veace.xyz/">
                                    <Button className="main-buy-button">MINT NOW</Button>
                                </a>
                            </div>
                        </Col>
                        <Col xs={{span: 18}}
                             sm={{span: 18}}
                             md={{span: 18}}
                             lg={{span: 9}}
                             xl={{span: 12}}
                             xxl={{span: 12}}>
                            <Row justify={"end"} align={"bottom"}>
                                <img className="main-nft-pic" width={'100%'} src={nft31} alt="nft"/>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default Main
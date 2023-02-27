import React from 'react'
import { Row, Col, Card } from 'antd'
import nft2 from "../../assets/2.png";
import nft3 from "../../assets/3.png";
import nft4 from "../../assets/4.png";
import nft11 from "../../assets/11.png";

const Meet = () => {
  return (
    <div className="meet-wrapper">
        <Row justify={"center"}>
            <Col span={20}>
                <Row align={"middle"}>
                    <Col span={12}>
                        <Card className="meet-card">
                            <p className="session-title">MEET EMU</p>
                            <p className="meet-content">
                                <strong>More than flex! &nbsp;&nbsp;</strong>
                                Eager Emu is a collection of 5000 unique NFTs, each of which is a authentic art
                                treasure.</p>
                            <p className="meet-content">
                                <strong>The mascot and spirit of ClassNow!<br/></strong>
                                Eager Emu is always eager to learn. Just like&nbsp;
                                <a className="link"
                                    href="https://www.theclassnow.com/index.html">ClassNow</a> is always on the
                                move, empowering educators and businesses to share the knowledge.</p>
                            <p className="meet-content">
                                <strong>About utility!</strong>&nbsp;
                                Holders are claiming their perks and have the previledge to enjoy the upcoming
                                premire ClassNow features.
                            </p>
                        </Card>
                    </Col>
                    <Col style={{padding: '64px'}} span={12}>
                        <Row gutter={[16, 16]}>
                            <Col span={12}><img width={'100%'} src={nft11} alt="nft"/></Col>
                            <Col span={12}><img width={'100%'} src={nft2} alt="nft"/></Col>
                            <Col span={12}><img width={'100%'} src={nft3} alt="nft"/></Col>
                            <Col span={12}><img width={'100%'} src={nft4} alt="nft"/></Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
    </div>
  )
}

export default Meet
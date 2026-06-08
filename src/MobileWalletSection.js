import mobileWalletScreenshot from "./assets/mobile-logo.png"
import androidWalletScreenshot from "./assets/mobile-logo-android.png"
import appleIcon from "./assets/apple.svg"
import androidIcon from "./assets/android.svg"

const walletScreenshotStyle = {
    width: "220px",
    height: "450px",
    objectFit: "contain",
    borderRadius: "20px",
    boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.1)",
}

const MobileWalletSection = () => {
    return (
        <section className="bg-light py-5" id="mobileWallet">
            <div className="container px-5">
                <div className="row gx-5 justify-content-center">
                    <div className="col-xxl-10">
                        <div className="text-center my-5">
                            <h2 className="display-4 fw-bolder mb-5">
                                <span className="text d-inline">Mobile Wallet</span>
                            </h2>
                            <div className="row g-4">
                                <div className="col-md-6">
                                    <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: "25px" }}>
                                        <div className="card-body p-4">
                                            <img src={appleIcon} alt="Apple iOS" style={{ width: "40px", height: "40px" }} className="mb-3" />
                                            <h3 className="fw-light mb-4">iOS Wallet</h3>
                                            <a href="https://testflight.apple.com/join/MqyFMHyW" target="_blank" rel="noreferrer">
                                                <img
                                                    src={mobileWalletScreenshot}
                                                    alt="Arqma Wallet on TestFlight"
                                                    className="mx-auto mb-4 d-block"
                                                    style={walletScreenshotStyle}
                                                />
                                            </a>
                                            <a
                                                className="btn btn-primary btn-lg px-5 py-2 fw-bolder inc bottoneCard"
                                                href="https://testflight.apple.com/join/MqyFMHyW"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <p className="cText mb-0">Join TestFlight</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: "25px" }}>
                                        <div className="card-body p-4">
                                            <img src={androidIcon} alt="Android" style={{ width: "40px", height: "40px" }} className="mb-3" />
                                            <h3 className="fw-light mb-4">Android Wallet</h3>
                                            <a
                                                href="https://github.com/arqma/Flutter-Wallet/releases/download/5.1.1/Arqma-Wallet-Android-5.1.1.apk"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <img
                                                    src={androidWalletScreenshot}
                                                    alt="Arqma Wallet on Android"
                                                    className="mx-auto mb-4 d-block"
                                                    style={walletScreenshotStyle}
                                                />
                                            </a>
                                            <a
                                                className="btn btn-primary btn-lg px-5 py-2 fw-bolder inc bottoneCard"
                                                href="https://github.com/arqma/Flutter-Wallet/releases/download/5.1.1/Arqma-Wallet-Android-5.1.1.apk"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <p className="cText mb-0">Download APK</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MobileWalletSection

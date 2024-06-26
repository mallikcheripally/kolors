import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Breadcrumbs from "@site/src/components/Breadcrumbs";

import styles from './index.module.css';

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
                <p className={styles.heroSubtitle}>
                    A robust JavaScript library for color conversions, manipulations, and validations. <br />
                    Generate harmonious schemes, enhance accessibility, and perform precise analysis.
                </p>
                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to="/docs/introduction">
                        Get Started
                    </Link>
                </div>
            </div>
        </header>
    );
}

function BenefitsSection() {
    return (
        <section className={styles.benefits}>
            <div className="container">
                <div className="row">
                    <div className="col col--6">
                        <div className={styles.benefit}>
                            <h3>🎨 Color Conversions</h3>
                            <p>Easily convert between HEX, RGB, HSL, HSV, LAB, LCH, CMYK, and XYZ color formats.</p>
                        </div>
                    </div>
                    <div className="col col--6">
                        <div className={styles.benefit}>
                            <h3>✅ Validations</h3>
                            <p>Ensure correct color values with comprehensive color format validation functions.</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col col--6">
                        <div className={styles.benefit}>
                            <h3>🔄 Manipulations</h3>
                            <p>Perform various color manipulations like blending, darkening, lightening, and more.</p>
                        </div>
                    </div>
                    <div className="col col--6">
                        <div className={styles.benefit}>
                            <h3>🚀 High Performance</h3>
                            <p>
                                Colore is optimized for performance, allowing you to handle large sets of color
                                transformations efficiently.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col col--6">
                        <div className={styles.benefit}>
                            <h3>🎨 Comprehensive Color Manipulation</h3>
                            <p>
                                From simple conversions to complex manipulations, Colore provides a wide range of color
                                functionalities.
                            </p>
                        </div>
                    </div>
                    <div className="col col--6">
                        <div className={styles.benefit}>
                            <h3>🌍 Active Community</h3>
                            <p>
                                Join our growing community of developers and designers, and get support from both peers
                                and maintainers.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col col--6">
                        <div className={styles.benefit}>
                            <h3>🔧 Constantly Improving</h3>
                            <p>Regular updates and improvements based on community feedback and contributions.</p>
                        </div>
                    </div>
                    <div className="col col--6">
                        <div className={styles.benefit}>
                            <h3>🔄 Seamless Integration</h3>
                            <p>
                                Easy to integrate with any JavaScript or TypeScript project, making it highly versatile
                                for different use cases.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function CommunitySection() {
    return (
        <section className={styles.community}>
            <div className="container">
                <h2>Join the Community</h2>
                <p>
                    Stay connected with other Colore users and developers. Get support, share ideas, and help us
                    improve!
                </p>
                <div className={styles.communityLinks}>
                    <Link className="button button--secondary button--lg" to="https://github.com/mallikcheripally">
                        GitHub Repository
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default function Home(): JSX.Element {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={`Colore JS | Tiny but Comprehensive library for Color Management`}
            description="A robust JavaScript library for color conversions, manipulations, and validations. Generate harmonious schemes, enhance accessibility, and perform precise analysis."
        >
            <Breadcrumbs />
            <HomepageHeader />
            <main>
                <BenefitsSection />
                <CommunitySection />
            </main>
        </Layout>
    );
}

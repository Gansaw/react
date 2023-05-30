import Codegubun from "./Codegubun";
import Codelist from "./Codelist";
import { RecoilRoot } from "recoil";
const CodeView = () => {

    return (
        <RecoilRoot>
            <main className="container">
                <h1>code</h1>
                <Codegubun />
                <Codelist />
            </main>
        </RecoilRoot>
    );
}

export default CodeView;
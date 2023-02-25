/* Tools */
import { resolvePath } from './resolvePath';

/* Data */
import tsConfig from '../tsconfig.json';

type PathPair = [string, string];

/* Main */
const paths: PathPair[] = Object.entries(tsConfig.compilerOptions.paths).map(
  (pathPair) => {
    const [pathKey, pathValue] = pathPair;
    /*
  將 tsconfig 中的 "@Component/*" 調整為 "@Component"
  將 tsconfig 中的 ["src/component/*"] 調整為 "src/component"
  */
    return [pathKey.replace('/*', ''), pathValue.join().replace('/*', '')];
  }
);
const alias = paths.reduce((reducedValue, currentValue) => {
  /* 這裡的 key 與 pathToResolve 分別對應到上方 paths 整理好的 ["@Component", "src/component"] */
  const [key, pathToResolve] = currentValue;
  return {
    ...reducedValue,
    [key]: resolvePath(pathToResolve),
  };
}, {});

export default alias;

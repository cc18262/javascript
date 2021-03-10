import "./export_traning.js";                                // export_traning.js からエクスポートされているものすべてをインポートする
import { a1, a2 } from "./export_traning.js";                // export_traning.js から a1 と a2 をインポートする
import { a1 as b1, a2 as b2 } from "./export_traning.js";    // a1 を b1、a2 を b2 という名前でインポートする
import * as mod from "./export_traning.js";                  // mod という名前でインポートする (mod.a1, mod.a2, ...)


/* =========================================================
 * 数学研习社 · 题库与公式库（第1-2讲）
 * 数据来源：2027 周洋鑫考研数学全程班基础随堂作业（1）（2）
 * ========================================================= */

/* 分级课程体系 */
const LEVELS = [
  { level: 1, name: '基础夯实', desc: '极限概念理解 + 核心等价无穷小公式', chapters: ['ch1', 'ch2'] },
  { level: 2, name: '综合进阶', desc: '七种未定式极限计算 + 连续与导数定义', chapters: ['ch3', 'ch4'] },
  { level: 3, name: '真题闯关', desc: '历年真题混合随机闯关，检验真实水平', special: 'real' }
];

const CHAPTERS = [
  { id: 'ch1', level: 1, title: '第1讲 函数极限定义与无穷小', desc: '极限定义、局部保号性、无穷小阶的比较', hw: '大纲考点基础精讲（1）' },
  { id: 'ch2', level: 1, title: '第2讲 等价无穷小替换', desc: '10 组核心等价无穷小公式与真题应用', hw: '大纲考点基础精讲（2）' },
  { id: 'ch3', level: 2, title: '第3讲 函数极限计算', desc: '七种未定式的系统计算训练', hw: '大纲考点基础精讲（3）' },
  { id: 'ch4', level: 2, title: '第4讲 连续性与导数定义', desc: '连续/可导判定、隐函数、参数方程与反函数求导', hw: '大纲考点基础精讲（4）' }
];

/* 题库（第1-2讲） */
const QUESTION_BANK = [
/* ---------------- 第1讲 ---------------- */
{
  id: 'c1q1', chapter: 'ch1', no: 1, type: 'choice', difficulty: 2,
  points: ['函数极限定义'],
  stem: `“对任意给定的 $\\varepsilon\\in(0,1)$，总存在正数 $X$，当 $x\\ge X$ 时，恒有 $|f(x)-a|\\le 2\\varepsilon$”是 $\\lim\\limits_{x\\to+\\infty}f(x)=a$ 的（　）.`,
  options: [
    `充分条件但非必要条件.`,
    `必要条件但非充分条件.`,
    `充分必要条件.`,
    `既非充分条件又非必要条件.`
  ],
  answer: 'C',
  analysis: `本题考察函数极限定义的理解（对应课程1中函数极限定义部分内容）.<br>由于 $|f(x)-a|\\le 2\\varepsilon<3\\varepsilon$，若记 $\\varepsilon_1=3\\varepsilon$，则 $\\varepsilon_1\\in(0,3)$，于是题设中所给条件等价于“对任意给定的 $\\varepsilon_1\\in(0,3)$，总存在正数 $X$，当 $x\\ge X$ 时，恒有 $|f(x)-a|<\\varepsilon_1$”.<br>由于 $\\varepsilon_1$ 可保证所取值任意地小，于是题设所给条件是 $\\lim\\limits_{x\\to+\\infty}f(x)=a$ 的充分必要条件. 应选 C.`
},
{
  id: 'c1q2', chapter: 'ch1', no: 2, type: 'choice', difficulty: 2,
  points: ['局部保号性'],
  stem: `设 $\\lim\\limits_{x\\to 0}f(x)$ 与 $\\lim\\limits_{x\\to 0}g(x)$ 均存在，下列四个命题中不正确的是（　）.`,
  options: [
    `若 $\\lim\\limits_{x\\to 0}f(x)>\\lim\\limits_{x\\to 0}g(x)$，则存在 $\\delta>0$，当 $0<|x|<\\delta$ 时，$f(x)>g(x)$`,
    `若 $\\lim\\limits_{x\\to 0}f(x)=-2$，则存在 $\\delta>0$，当 $0<|x|<\\delta$ 时，$|f(x)|>1$`,
    `若存在 $\\delta>0$，当 $0<|x|<\\delta$ 时，$f(x)>g(x)$，则 $\\lim\\limits_{x\\to 0}f(x)>\\lim\\limits_{x\\to 0}g(x)$`,
    `若存在 $\\delta>0$，当 $0<|x|<\\delta$ 时，$f(x)\\ge g(x)$，则 $\\lim\\limits_{x\\to 0}f(x)\\ge\\lim\\limits_{x\\to 0}g(x)$`
  ],
  answer: 'C',
  analysis: `本题考察函数极限的局部保号性内容（对应课程1）.<br>对于（A），若 $\\lim\\limits_{x\\to 0}f(x)>\\lim\\limits_{x\\to 0}g(x)$，根据局部保号性推论知，存在 $\\delta>0$，当 $0<|x|<\\delta$ 时 $f(x)>g(x)$，故（A）正确.<br>对于（B），若 $\\lim\\limits_{x\\to 0}f(x)=-2$，则 $\\lim\\limits_{x\\to 0}|f(x)|=2>1$，根据局部保号性推论知（B）正确.<br>对于（C），当 $0<|x|<\\delta$ 时 $f(x)>g(x)$，且两极限均存在，根据局部加帽保号性只能得到 $\\lim\\limits_{x\\to 0}f(x)\\ge\\lim\\limits_{x\\to 0}g(x)$，故（C）错误.<br>对于（D），由局部加帽保号性知（D）正确. 应选（C）.`
},
{
  id: 'c1q3', chapter: 'ch1', no: 3, type: 'choice', difficulty: 2, tag: '2014真题',
  points: ['无穷小阶的比较'],
  stem: `当 $x\\to 0^{+}$ 时，若 $\\ln^{\\alpha}(1+2x)$，$(1-\\cos x)^{\\frac{1}{\\alpha}}$ 均是比 $x$ 高阶的无穷小，则 $\\alpha$ 的取值范围是（　）.`,
  options: [
    `$(2,+\\infty)$．`,
    `$(1,2)$．`,
    `$\\left(\\dfrac{1}{2},1\\right)$．`,
    `$\\left(0,\\dfrac{1}{2}\\right)$．`
  ],
  answer: 'B',
  analysis: `由于当 $x\\to 0^{+}$ 时，$$\\ln^{\\alpha}(1+2x)\\sim(2x)^{\\alpha}=2^{\\alpha}x^{\\alpha},$$ 即为 $x$ 的 $\\alpha$ 阶无穷小量；$$(1-\\cos x)^{\\frac{1}{\\alpha}}\\sim\\left(\\frac{1}{2}x^{2}\\right)^{\\frac{1}{\\alpha}}=\\frac{1}{2^{1/\\alpha}}x^{\\frac{2}{\\alpha}},$$ 即为 $x$ 的 $\\frac{2}{\\alpha}$ 阶无穷小量.<br>由题设可知 $\\alpha>1$ 且 $\\frac{2}{\\alpha}>1$，即 $1<\\alpha<2$，应选（B）.`
},
{
  id: 'c1q4', chapter: 'ch1', no: 4, type: 'choice', difficulty: 2,
  points: ['无穷小阶的比较', '等价无穷小'],
  stem: `当 $x\\to 0^{+}$ 时，下列无穷小量中阶数最低的是（　）.`,
  options: [
    `$\\sqrt{x+1}-\\cos x$．`,
    `$\\ln\\cos x$．`,
    `$(1+\\tan x)^{\\sin x}-1$．`,
    `$e^{x^{2}}-\\sqrt[3]{\\cos x}$．`
  ],
  answer: 'A',
  analysis: `由于当 $x\\to 0^{+}$ 时，$$\\sqrt{1+x}-\\cos x=(\\sqrt{1+x}-1)+(1-\\cos x)\\sim\\frac{x}{2}+\\frac{x^{2}}{2}\\sim\\frac{x}{2},$$ $$\\ln\\cos x\\sim\\cos x-1\\sim-\\frac{1}{2}x^{2},$$ $$(1+\\tan x)^{\\sin x}-1=e^{\\sin x\\ln(1+\\tan x)}-1\\sim\\sin x\\cdot\\ln(1+\\tan x)\\sim x\\cdot x=x^{2},$$ $$e^{x^{2}}-\\sqrt[3]{\\cos x}=(e^{x^{2}}-1)+(1-\\sqrt[3]{\\cos x})\\sim x^{2}+\\frac{1}{6}x^{2}=\\frac{7}{6}x^{2},$$ 于是无穷小量中阶数最低的是 $\\sqrt{1+x}-\\cos x$（1 阶，其余均为 2 阶），应选（A）.<br>【注】选项（C）还可以利用课程中的技巧法速解，你还记得么？`
},
{
  id: 'c1q5', chapter: 'ch1', no: 5, type: 'choice', difficulty: 2,
  points: ['等价无穷小', '和取低阶原则'],
  stem: `$\\lim\\limits_{x\\to 0}\\dfrac{a\\tan x+b(1-\\cos x)}{c\\ln(1-2x)+d(1-e^{-x^{2}})}=2$，其中 $a^{2}+c^{2}\\ne 0$，则必有（　）.`,
  options: [
    `$b=4d$．`,
    `$b=-4d$．`,
    `$a=4c$．`,
    `$a=-4c$．`
  ],
  answer: 'D',
  analysis: `由于当 $x\\to 0$ 时，$$\\tan x\\sim x,\\quad 1-\\cos x\\sim\\frac{x^{2}}{2},\\quad \\ln(1-2x)\\sim-2x,\\quad 1-e^{-x^{2}}\\sim x^{2},$$ 于是根据无穷小量的和取低阶原则知$$\\lim_{x\\to 0}\\frac{a\\tan x+b(1-\\cos x)}{c\\ln(1-2x)+d(1-e^{-x^{2}})}=\\lim_{x\\to 0}\\frac{a\\tan x}{c\\ln(1-2x)}=\\lim_{x\\to 0}\\frac{ax}{-2cx}=-\\frac{a}{2c}=2,$$ 即 $a=-4c$，应选（D）.`
},
{
  id: 'c1q6', chapter: 'ch1', no: 6, type: 'choice', difficulty: 3, tag: '2013真题',
  points: ['无穷小阶的比较', '反三角函数'],
  stem: `设 $\\cos x-1=x\\sin\\alpha(x)$，其中 $|\\alpha(x)|<\\dfrac{\\pi}{2}$，则当 $x\\to 0$ 时，$\\alpha(x)$ 是（　）.`,
  options: [
    `比 $x$ 高阶的无穷小量.`,
    `比 $x$ 低阶的无穷小量.`,
    `与 $x$ 同阶但不等价的无穷小量.`,
    `与 $x$ 等价的无穷小量.`
  ],
  answer: 'C',
  analysis: `由于当 $x\\to 0$ 时 $x\\ne 0$，于是由 $\\cos x-1=x\\sin\\alpha(x)$ 知 $\\sin\\alpha(x)=\\dfrac{\\cos x-1}{x}$.<br>又 $|\\alpha(x)|<\\dfrac{\\pi}{2}$（位于主值区间内），于是 $\\alpha(x)=\\arcsin\\dfrac{\\cos x-1}{x}$，从而当 $x\\to 0$ 时$$\\alpha(x)\\sim\\frac{\\cos x-1}{x}\\sim\\frac{-\\frac{1}{2}x^{2}}{x}=-\\frac{1}{2}x,$$ 即 $\\alpha(x)$ 是与 $x$ 同阶但不等价的无穷小量，应选（C）.`
},
{
  id: 'c1q7', chapter: 'ch1', no: 7, type: 'choice', difficulty: 3,
  points: ['无穷小运算性质'],
  stem: `设 $m,n$ 均为正整数，当 $x\\to 0$ 时下列四个命题中不正确的是（　）.`,
  options: [
    `若 $f(x)$ 是 $g(x)$ 的高阶无穷小量，则 $f(x)+g(x)\\sim g(x)$.`,
    `若 $f(x)$ 是 $g(x)$ 的高阶无穷小量，则 $f(x)\\cdot g(x)=o\\left([g(x)]^{2}\\right)$.`,
    `若 $f(x)$ 与 $g(x)$ 分别为 $x$ 的 $m,n$ 阶无穷小量，则 $f(x)\\cdot g(x)$ 为 $x$ 的 $m+n$ 阶无穷小量.`,
    `若 $f(x)$ 与 $g(x)$ 分别为 $x$ 的 $m,n$ 阶无穷小量，则 $f(x)\\pm g(x)$ 为 $x$ 的 $\\min(m,n)$ 阶无穷小量.`
  ],
  answer: 'D',
  analysis: `对于（A）（B），由于 $f(x)$ 是 $g(x)$ 的高阶无穷小量，则 $\\lim\\limits_{x\\to 0}\\dfrac{f(x)}{g(x)}=0$，于是$$\\lim_{x\\to 0}\\frac{f(x)+g(x)}{g(x)}=\\lim_{x\\to 0}\\left[\\frac{f(x)}{g(x)}+1\\right]=1,\\qquad \\lim_{x\\to 0}\\frac{f(x)g(x)}{[g(x)]^{2}}=\\lim_{x\\to 0}\\frac{f(x)}{g(x)}=0,$$ 故选项（A）（B）均正确.<br>对于（C）（D），由于 $f(x)$ 与 $g(x)$ 分别为 $x$ 的 $m,n$ 阶无穷小量，于是当 $x\\to 0$ 时 $f(x)\\sim Ax^{m}$，$g(x)\\sim Bx^{n}$（$A\\ne 0,B\\ne 0$），从而 $f(x)g(x)\\sim ABx^{m+n}$，即 $f(x)g(x)$ 为 $x$ 的 $m+n$ 阶无穷小量.<br>但是（D）却不一定正确，例如当 $x\\to 0$ 时 $\\tan x$ 与 $\\sin x$ 均为 $x$ 的 1 阶无穷小量，但是 $\\tan x-\\sin x\\sim\\dfrac{1}{2}x^{3}$ 为 $x$ 的 3 阶无穷小量（这种问题我很喜欢称之为跳阶），故（D）错误. 应选（D）.`
},
/* ---------------- 第2讲 ---------------- */
{
  id: 'c2q1', chapter: 'ch2', no: 1, type: 'open', difficulty: 1,
  points: ['等价无穷小公式'],
  stem: `基本公式复习题. 当 $x\\to 0$ 时，有<br>（1）$x-\\sin x\\sim$______；（2）$x-\\arcsin x\\sim$______；（3）$x-\\tan x\\sim$______；（4）$x-\\arctan x\\sim$______；（5）$e^{x}-1-x\\sim$______；（6）$x-\\ln(1+x)\\sim$______；（7）$\\tan x-\\sin x\\sim$______；（8）$\\arcsin x-\\sin x\\sim$______；（9）$\\tan x-\\arctan x\\sim$______；（10）$e^{x}-1-\\ln(1+x)\\sim$______.`,
  answer: `见解析（共 10 个公式）`,
  analysis: `考察基本的等价无穷小替换公式的理解与记忆.<br>（1）$x-\\sin x\\sim\\dfrac{1}{6}x^{3}$；（2）$x-\\arcsin x\\sim-\\dfrac{1}{6}x^{3}$；<br>（3）$x-\\tan x\\sim-\\dfrac{1}{3}x^{3}$；（4）$x-\\arctan x\\sim\\dfrac{1}{3}x^{3}$；<br>（5）$e^{x}-1-x\\sim\\dfrac{1}{2}x^{2}$；（6）$x-\\ln(1+x)\\sim\\dfrac{1}{2}x^{2}$；<br>（7）$\\tan x-\\sin x\\sim\\dfrac{1}{2}x^{3}$；（8）$\\arcsin x-\\sin x\\sim\\dfrac{1}{3}x^{3}$；<br>（9）$\\tan x-\\arctan x\\sim\\dfrac{2}{3}x^{3}$；（10）$e^{x}-1-\\ln(1+x)\\sim x^{2}$.`
},
{
  id: 'c2q2', chapter: 'ch2', no: 2, type: 'choice', difficulty: 3,
  points: ['无穷小阶的比较', '等价无穷小'],
  stem: `（课堂例题衔接，检测下自我消化情况）当 $x\\to 0$ 时，下列无穷小量中阶数最高的是（　）.`,
  options: [
    `$x+\\ln(1+x^{2})-\\tan x$．`,
    `$\\cos x\\,(1-\\cos x)$．`,
    `$\\sin x-\\tan(\\sin x)$．`,
    `$x-\\ln(1+\\sin x)$．`
  ],
  answer: 'C',
  analysis: `对于（A），由于当 $x\\to 0$ 时 $\\tan x-x\\sim\\dfrac{1}{3}x^{3}$（3 阶），$\\ln(1+x^{2})\\sim x^{2}$（2 阶），于是$$x+\\ln(1+x^{2})-\\tan x=\\ln(1+x^{2})-(\\tan x-x)\\sim x^{2},$$ 为 2 阶.<br>对于（B），当 $x\\to 0$ 时 $\\cos x(1-\\cos x)\\sim 1\\cdot\\dfrac{1}{2}x^{2}=\\dfrac{1}{2}x^{2}$，为 2 阶.<br>对于（C），当 $x\\to 0$ 时 $\\sin x-\\tan(\\sin x)\\sim-\\dfrac{1}{3}\\sin^{3}x\\sim-\\dfrac{1}{3}x^{3}$，为 3 阶.<br>对于（D），当 $x\\to 0$ 时$$x-\\ln(1+\\sin x)=(x-\\sin x)+[\\sin x-\\ln(1+\\sin x)]\\sim\\frac{1}{6}x^{3}+\\frac{1}{2}\\sin^{2}x\\sim\\frac{1}{2}x^{2},$$ 为 2 阶.<br>阶数最高的是（C），应选（C）.<br>【注】选项（D）类似于《高分讲义》例1.29，如果利用泰勒展开法处理，你可以操作么？`
},
{
  id: 'c2q3', chapter: 'ch2', no: 3, type: 'open', difficulty: 1, tag: '2007真题',
  points: ['泰勒展开', '等价无穷小'],
  stem: `$\\lim\\limits_{x\\to 0}\\dfrac{\\arctan x-\\sin x}{x^{3}}=$______.`,
  answer: `$-\\dfrac{1}{6}$`,
  analysis: `方法一：泰勒展开法.$$\\lim_{x\\to 0}\\frac{\\arctan x-\\sin x}{x^{3}}=\\lim_{x\\to 0}\\frac{\\left[x-\\frac{1}{3}x^{3}+o(x^{3})\\right]-\\left[x-\\frac{1}{6}x^{3}+o(x^{3})\\right]}{x^{3}}=\\lim_{x\\to 0}\\frac{-\\frac{1}{6}x^{3}+o(x^{3})}{x^{3}}=-\\frac{1}{6}.$$ 方法二：直接等价.$$\\lim_{x\\to 0}\\frac{\\arctan x-\\sin x}{x^{3}}=\\lim_{x\\to 0}\\frac{-\\frac{1}{6}x^{3}}{x^{3}}=-\\frac{1}{6}.$$ 方法三：补项拆分.$$\\lim_{x\\to 0}\\frac{\\arctan x-\\sin x}{x^{3}}=\\lim_{x\\to 0}\\frac{\\arctan x-x}{x^{3}}+\\lim_{x\\to 0}\\frac{x-\\sin x}{x^{3}}=-\\frac{1}{3}+\\frac{1}{6}=-\\frac{1}{6}.$$ 【注】本题方法众多，但殊途同归.`
},
{
  id: 'c2q4', chapter: 'ch2', no: 4, type: 'choice', difficulty: 1, tag: '2013真题',
  points: ['等价无穷小', '极限反求参数'],
  stem: `已知极限 $\\lim\\limits_{x\\to 0}\\dfrac{\\arcsin x-\\arctan x}{x^{k}}=c$，其中 $k,c$ 为常数，且 $c\\ne 0$，则（　）.`,
  options: [
    `$k=2,c=-\\dfrac{1}{2}$．`,
    `$k=2,c=\\dfrac{1}{2}$．`,
    `$k=3,c=-\\dfrac{1}{2}$．`,
    `$k=3,c=\\dfrac{1}{2}$．`
  ],
  answer: 'D',
  analysis: `由于当 $x\\to 0$ 时$$\\arcsin x-\\arctan x=(\\arcsin x-x)+(x-\\arctan x)\\sim\\frac{1}{6}x^{3}+\\frac{1}{3}x^{3}=\\frac{1}{2}x^{3},$$ 于是$$\\lim_{x\\to 0}\\frac{\\arcsin x-\\arctan x}{x^{k}}=\\lim_{x\\to 0}\\frac{\\frac{1}{2}x^{3}}{x^{k}}=c,$$ 解得 $k=3,\\ c=\\dfrac{1}{2}$，应选（D）.<br>【注】本题还可以利用泰勒展开法、补项 $x$ 等方法处理，大家可尽情发挥.`
},
{
  id: 'c2q5', chapter: 'ch2', no: 5, type: 'choice', difficulty: 2, tag: '2013真题',
  points: ['导数定义', '等价无穷小'],
  stem: `设函数 $f(x)=\\arctan x$. 若 $f(x)=xf'(\\xi)$，则 $\\lim\\limits_{x\\to 0}\\dfrac{\\xi^{2}}{x^{2}}=$（　）.`,
  options: [
    `$1$．`,
    `$\\dfrac{2}{3}$．`,
    `$\\dfrac{1}{2}$．`,
    `$\\dfrac{1}{3}$．`
  ],
  answer: 'D',
  analysis: `由 $f(x)=xf'(\\xi)$ 知 $\\arctan x=x\\cdot\\dfrac{1}{1+\\xi^{2}}$.<br>于是，当 $x\\to 0$ 时 $\\xi^{2}=\\dfrac{x}{\\arctan x}-1$，从而$$\\lim_{x\\to 0}\\frac{\\xi^{2}}{x^{2}}=\\lim_{x\\to 0}\\frac{x-\\arctan x}{x^{2}\\arctan x}=\\lim_{x\\to 0}\\frac{\\frac{1}{3}x^{3}}{x^{2}\\cdot x}=\\frac{1}{3},$$ 应选（D）.`
},
{
  id: 'c2q6', chapter: 'ch2', no: 6, type: 'choice', difficulty: 3,
  points: ['极限四则运算', '根式有理化'],
  stem: `当 $x\\to 0$ 时下列四个命题或计算结果错误的是（　）.`,
  options: [
    `若 $\\lim\\,[f(x)\\pm g(x)]$ 存在，则 $\\lim f(x)$ 与 $\\lim g(x)$ 不一定均存在，也可能均不存在.`,
    `若 $\\lim\\,[f(x)\\pm g(x)]$ 存在，且 $\\lim f(x)$ 存在，则 $\\lim g(x)$ 存在.`,
    `$\\lim\\limits_{x\\to+\\infty}\\left(\\sqrt{x^{2}-x+1}-\\sqrt{x^{2}+x+1}\\right)=-1$.`,
    `$\\lim\\limits_{x\\to-\\infty}\\left(\\sqrt{x^{2}-x+1}-\\sqrt{x^{2}+x+1}\\right)=0$.`
  ],
  answer: 'D',
  analysis: `观察阶数，利用补项法.<br>对于（A）（B），参考《高分讲义》例1.30，本题再次练习的目的是希望大家加强这两个命题的意识，后续还会有重要用途.<br>对于（C），$$\\lim_{x\\to+\\infty}\\left(\\sqrt{x^{2}-x+1}-\\sqrt{x^{2}+x+1}\\right)=\\lim_{x\\to+\\infty}\\frac{-2x}{\\sqrt{x^{2}-x+1}+\\sqrt{x^{2}+x+1}}=\\lim_{x\\to+\\infty}\\frac{-2x}{x+x}=-1,$$ 故（C）正确.<br>对于（D），令 $x=-t$，则$$\\lim_{x\\to-\\infty}\\left(\\sqrt{x^{2}-x+1}-\\sqrt{x^{2}+x+1}\\right)=\\lim_{t\\to+\\infty}\\left(\\sqrt{t^{2}+t+1}-\\sqrt{t^{2}-t+1}\\right)=\\lim_{t\\to+\\infty}\\frac{2t}{\\sqrt{t^{2}+t+1}+\\sqrt{t^{2}-t+1}}=1,$$ 故（D）错误. 应选（D）.`
},
{
  id: 'c2q7', chapter: 'ch2', no: 7, type: 'open', difficulty: 1,
  points: ['补项法', '等价无穷小'],
  stem: `$\\lim\\limits_{x\\to 0}\\dfrac{\\tan x-\\ln(1+x)}{x^{2}}=$______.`,
  answer: `$\\dfrac{1}{2}$`,
  analysis: `观察阶数，利用补项法.$$\\lim_{x\\to 0}\\frac{\\tan x-\\ln(1+x)}{x^{2}}=\\lim_{x\\to 0}\\frac{\\tan x-x+x-\\ln(1+x)}{x^{2}}=\\lim_{x\\to 0}\\frac{\\tan x-x}{x^{2}}+\\lim_{x\\to 0}\\frac{x-\\ln(1+x)}{x^{2}}=\\lim_{x\\to 0}\\frac{\\frac{1}{3}x^{3}}{x^{2}}+\\lim_{x\\to 0}\\frac{\\frac{1}{2}x^{2}}{x^{2}}=0+\\frac{1}{2}=\\frac{1}{2}.$$`
},
{
  id: 'c2q8', chapter: 'ch2', no: 8, type: 'open', difficulty: 2, tag: '2023真题',
  points: ['等价无穷小', '极限反求参数'],
  stem: `当 $x\\to 0$ 时，函数 $f(x)=ax+bx^{2}+\\ln(1+x)$ 与 $g(x)=e^{x^{2}}-\\cos x$ 是等价无穷小，则 $ab=$______.`,
  answer: `$-2$`,
  analysis: `由题意可知 $\\lim\\limits_{x\\to 0}\\dfrac{f(x)}{g(x)}=1$，又$$\\lim_{x\\to 0}\\frac{f(x)}{g(x)}=\\lim_{x\\to 0}\\frac{ax+bx^{2}+\\ln(1+x)}{e^{x^{2}}-\\cos x}=\\lim_{x\\to 0}\\frac{ax+bx^{2}+x-\\frac{1}{2}x^{2}+o(x^{2})}{(e^{x^{2}}-1)+(1-\\cos x)}=\\lim_{x\\to 0}\\frac{(a+1)x+\\left(b-\\frac{1}{2}\\right)x^{2}+o(x^{2})}{\\frac{3}{2}x^{2}}=1,$$ 所以 $a+1=0$，$b-\\dfrac{1}{2}=\\dfrac{3}{2}$，解得 $a=-1$，$b=2$，于是 $ab=-2$.`
}
];

/* 公式库（背公式模块） */
const FORMULA_BANK = [
/* --- 等价无穷小 --- */
{ id: 'f1', cat: '等价无穷小', front: `$x-\\sin x \\sim \\;?$（$x\\to 0$）`, back: `$x-\\sin x\\sim\\dfrac{1}{6}x^{3}$` },
{ id: 'f2', cat: '等价无穷小', front: `$x-\\arcsin x \\sim \\;?$（$x\\to 0$）`, back: `$x-\\arcsin x\\sim-\\dfrac{1}{6}x^{3}$` },
{ id: 'f3', cat: '等价无穷小', front: `$x-\\tan x \\sim \\;?$（$x\\to 0$）`, back: `$x-\\tan x\\sim-\\dfrac{1}{3}x^{3}$` },
{ id: 'f4', cat: '等价无穷小', front: `$x-\\arctan x \\sim \\;?$（$x\\to 0$）`, back: `$x-\\arctan x\\sim\\dfrac{1}{3}x^{3}$` },
{ id: 'f5', cat: '等价无穷小', front: `$\\tan x-\\sin x \\sim \\;?$（$x\\to 0$）`, back: `$\\tan x-\\sin x\\sim\\dfrac{1}{2}x^{3}$` },
{ id: 'f6', cat: '等价无穷小', front: `$\\arcsin x-\\sin x \\sim \\;?$（$x\\to 0$）`, back: `$\\arcsin x-\\sin x\\sim\\dfrac{1}{3}x^{3}$` },
{ id: 'f7', cat: '等价无穷小', front: `$\\tan x-\\arctan x \\sim \\;?$（$x\\to 0$）`, back: `$\\tan x-\\arctan x\\sim\\dfrac{2}{3}x^{3}$` },
{ id: 'f8', cat: '等价无穷小', front: `$e^{x}-1-x \\sim \\;?$（$x\\to 0$）`, back: `$e^{x}-1-x\\sim\\dfrac{1}{2}x^{2}$` },
{ id: 'f9', cat: '等价无穷小', front: `$x-\\ln(1+x) \\sim \\;?$（$x\\to 0$）`, back: `$x-\\ln(1+x)\\sim\\dfrac{1}{2}x^{2}$` },
{ id: 'f10', cat: '等价无穷小', front: `$e^{x}-1-\\ln(1+x) \\sim \\;?$（$x\\to 0$）`, back: `$e^{x}-1-\\ln(1+x)\\sim x^{2}$` },
{ id: 'f11', cat: '等价无穷小', front: `$1-\\cos x \\sim \\;?$（$x\\to 0$）`, back: `$1-\\cos x\\sim\\dfrac{1}{2}x^{2}$` },
{ id: 'f12', cat: '等价无穷小', front: `$(1+x)^{\\alpha}-1 \\sim \\;?$（$x\\to 0$）`, back: `$(1+x)^{\\alpha}-1\\sim\\alpha x$` },
{ id: 'f13', cat: '等价无穷小', front: `$a^{x}-1 \\sim \\;?$（$x\\to 0$）`, back: `$a^{x}-1\\sim x\\ln a$` },
{ id: 'f14', cat: '等价无穷小', front: `$1-\\sqrt[n]{\\cos x} \\sim \\;?$（$x\\to 0$）`, back: `$1-\\sqrt[n]{\\cos x}\\sim\\dfrac{x^{2}}{2n}$` },
/* --- 泰勒展开 --- */
{ id: 'f15', cat: '泰勒展开', front: `$e^{x}$ 的麦克劳林展开`, back: `$e^{x}=1+x+\\dfrac{x^{2}}{2!}+\\dfrac{x^{3}}{3!}+o(x^{3})$` },
{ id: 'f16', cat: '泰勒展开', front: `$\\sin x$ 的麦克劳林展开`, back: `$\\sin x=x-\\dfrac{x^{3}}{3!}+\\dfrac{x^{5}}{5!}+o(x^{5})$` },
{ id: 'f17', cat: '泰勒展开', front: `$\\cos x$ 的麦克劳林展开`, back: `$\\cos x=1-\\dfrac{x^{2}}{2!}+\\dfrac{x^{4}}{4!}+o(x^{4})$` },
{ id: 'f18', cat: '泰勒展开', front: `$\\tan x$ 的麦克劳林展开`, back: `$\\tan x=x+\\dfrac{x^{3}}{3}+\\dfrac{2x^{5}}{15}+o(x^{5})$` },
{ id: 'f19', cat: '泰勒展开', front: `$\\arcsin x$ 的麦克劳林展开`, back: `$\\arcsin x=x+\\dfrac{x^{3}}{6}+\\dfrac{3x^{5}}{40}+o(x^{5})$` },
{ id: 'f20', cat: '泰勒展开', front: `$\\arctan x$ 的麦克劳林展开`, back: `$\\arctan x=x-\\dfrac{x^{3}}{3}+\\dfrac{x^{5}}{5}+o(x^{5})$` },
{ id: 'f21', cat: '泰勒展开', front: `$\\ln(1+x)$ 的麦克劳林展开`, back: `$\\ln(1+x)=x-\\dfrac{x^{2}}{2}+\\dfrac{x^{3}}{3}+o(x^{3})$` },
{ id: 'f22', cat: '泰勒展开', front: `$(1+x)^{\\alpha}$ 的麦克劳林展开`, back: `$(1+x)^{\\alpha}=1+\\alpha x+\\dfrac{\\alpha(\\alpha-1)}{2!}x^{2}+o(x^{2})$` },
/* --- 求导公式 --- */
{ id: 'f23', cat: '求导公式', front: `$(\\tan x)'=\\;?$`, back: `$(\\tan x)'=\\sec^{2}x$` },
{ id: 'f24', cat: '求导公式', front: `$(\\sec x)'=\\;?$`, back: `$(\\sec x)'=\\sec x\\tan x$` },
{ id: 'f25', cat: '求导公式', front: `$(\\arcsin x)'=\\;?$`, back: `$(\\arcsin x)'=\\dfrac{1}{\\sqrt{1-x^{2}}}$` },
{ id: 'f26', cat: '求导公式', front: `$(\\arctan x)'=\\;?$`, back: `$(\\arctan x)'=\\dfrac{1}{1+x^{2}}$` },
{ id: 'f27', cat: '求导公式', front: `反函数求导公式：$g=f^{-1}$，$g'(y)=\\;?$`, back: `$g'(y)=\\dfrac{1}{f'(x)}$，$g''(y)=-\\dfrac{f''(x)}{[f'(x)]^{3}}$` },
{ id: 'f28', cat: '求导公式', front: `参数方程 $\\begin{cases}x=\\varphi(t)\\\\y=\\psi(t)\\end{cases}$ 求导`, back: `$\\dfrac{dy}{dx}=\\dfrac{\\psi'(t)}{\\varphi'(t)}$` },
/* --- 极限结论 --- */
{ id: 'f29', cat: '极限结论', front: `第一个重要极限`, back: `$\\lim\\limits_{x\\to 0}\\dfrac{\\sin x}{x}=1$` },
{ id: 'f30', cat: '极限结论', front: `第二个重要极限（$1^{\\infty}$ 型）`, back: `$\\lim\\limits_{x\\to\\infty}\\left(1+\\dfrac{1}{x}\\right)^{x}=e$` },
{ id: 'f31', cat: '极限结论', front: `$1^{\\infty}$ 型速算公式`, back: `若 $\\lim u=1,\\lim v=\\infty$，则 $\\lim u^{v}=e^{\\lim v(u-1)}$` },
{ id: 'f32', cat: '极限结论', front: `单侧导数极限定理`, back: `$f$ 在 $x_0$ 连续、去心邻域可导且 $\\lim\\limits_{x\\to x_0^{+}}f'(x)=A$，则 $f_{+}'(x_0)=A$` },
{ id: 'f33', cat: '极限结论', front: `可导的充要条件`, back: `$f'(x_0)$ 存在 $\\iff f_{+}'(x_0)=f_{-}'(x_0)$ 均存在且相等` },
{ id: 'f34', cat: '极限结论', front: `高阶无穷小运算：$f=o(g)$ 时 $f+g\\sim\\;?$`, back: `$f+g\\sim g$，且 $f\\cdot g=o(g^{2})$` }
];

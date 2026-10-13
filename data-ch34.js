/* 题库：第3-4讲（21 题） */
QUESTION_BANK.push({
  id: 'c3q1',
  chapter: 'ch3',
  no: 1,
  type: 'open',
  difficulty: 2,
  points: ['泰勒展开', '等价无穷小'],
  stem: `计算极限：$\\lim\\limits_{x\\to 0}\\dfrac{\\sqrt{1+\\tan x}-\\sqrt{1+\\sin x}}{x\\sqrt{1+\\sin^{2} x}-x}$`,
  answer: `$\\dfrac{1}{2}$`,
  analysis: `原式 $=\\lim\\limits_{x\\to 0}\\dfrac{\\sqrt{1+\\tan x}-\\sqrt{1+\\sin x}}{x\\cdot\\left[\\left(1+\\sin^{2} x\\right)^{\\frac{1}{2}}-1\\right]}$<br>$=\\lim\\limits_{x\\to 0}\\dfrac{\\tan x-\\sin x}{x\\cdot\\dfrac{1}{2}\\sin^{2} x\\cdot\\left(\\sqrt{1+\\tan x}+\\sqrt{1+\\sin x}\\right)}$<br>$=\\lim\\limits_{x\\to 0}\\dfrac{\\left[x+\\dfrac{1}{3}x^{3}+o\\left(x^{3}\\right)\\right]-\\left[x-\\dfrac{1}{6}x^{3}+o\\left(x^{3}\\right)\\right]}{x\\cdot\\dfrac{1}{2}x^{2}\\cdot 2}$<br>$=\\lim\\limits_{x\\to 0}\\dfrac{\\dfrac{1}{2}x^{3}+o\\left(x^{3}\\right)}{x^{3}}=\\dfrac{1}{2}$.`
});
QUESTION_BANK.push({
  id: 'c3q2',
  chapter: 'ch3',
  no: 2,
  type: 'open',
  difficulty: 2,
  points: ['泰勒展开', '等价无穷小'],
  stem: `计算极限：$\\lim\\limits_{x\\to 0}\\dfrac{1-\\cos\\sqrt{\\arctan x-\\arcsin x}}{\\sqrt[3]{1+x^{3}}-\\sqrt[3]{1-x^{3}}}$`,
  answer: `$-\\dfrac{3}{8}$`,
  analysis: `原式 $=\\lim\\limits_{x\\to 0}\\dfrac{\\dfrac{1}{2}(\\arctan x-\\arcsin x)}{\\left[1+\\dfrac{1}{3}x^{3}+o\\left(x^{3}\\right)\\right]-\\left[1-\\dfrac{1}{3}x^{3}+o\\left(x^{3}\\right)\\right]}$<br>$=\\dfrac{1}{2}\\lim\\limits_{x\\to 0}\\dfrac{\\left[x-\\dfrac{1}{3}x^{3}+o\\left(x^{3}\\right)\\right]-\\left[x+\\dfrac{1}{6}x^{3}+o\\left(x^{3}\\right)\\right]}{\\dfrac{2}{3}x^{3}+o\\left(x^{3}\\right)}$<br>$=\\dfrac{1}{2}\\lim\\limits_{x\\to 0}\\dfrac{-\\dfrac{1}{2}x^{3}+o\\left(x^{3}\\right)}{\\dfrac{2}{3}x^{3}}=-\\dfrac{3}{8}$.`
});
QUESTION_BANK.push({
  id: 'c3q3',
  chapter: 'ch3',
  no: 3,
  type: 'open',
  difficulty: 1,
  points: ['等价无穷小'],
  stem: `计算极限：$\\lim\\limits_{x\\to 0}\\dfrac{\\sqrt{\\cos x}-\\sqrt[3]{\\cos x}}{\\ln^{2}(1+x)}$`,
  answer: `$-\\dfrac{1}{12}$`,
  analysis: `由于当 $x\\to 0$ 时，$1-\\sqrt[n]{\\cos x}\\sim\\dfrac{1}{2n}x^{2}$（其中 $n$ 为正整数），于是<br>$\\lim\\limits_{x\\to 0}\\dfrac{\\sqrt{\\cos x}-\\sqrt[3]{\\cos x}}{\\ln^{2}(1+x)}=\\lim\\limits_{x\\to 0}\\dfrac{\\sqrt{\\cos x}-\\sqrt[3]{\\cos x}}{x^{2}}=\\lim\\limits_{x\\to 0}\\dfrac{\\left(\\sqrt{\\cos x}-1\\right)+\\left(1-\\sqrt[3]{\\cos x}\\right)}{x^{2}}$<br>$=\\lim\\limits_{x\\to 0}\\dfrac{\\sqrt{\\cos x}-1}{x^{2}}+\\lim\\limits_{x\\to 0}\\dfrac{1-\\sqrt[3]{\\cos x}}{x^{2}}$<br>$=\\lim\\limits_{x\\to 0}\\dfrac{-\\dfrac{1}{2}\\cdot\\dfrac{1}{2}x^{2}}{x^{2}}+\\lim\\limits_{x\\to 0}\\dfrac{\\dfrac{1}{3}\\cdot\\dfrac{1}{2}x^{2}}{x^{2}}$<br>$=-\\dfrac{1}{4}+\\dfrac{1}{6}=-\\dfrac{1}{12}$.`
});
QUESTION_BANK.push({
  id: 'c3q4',
  chapter: 'ch3',
  no: 4,
  type: 'open',
  difficulty: 1,
  points: ['泰勒展开'],
  stem: `计算极限：$\\lim\\limits_{x\\to 0^{+}}\\dfrac{e^{x}-1-x}{\\sqrt{1-x}-\\cos\\sqrt{x}}$`,
  answer: `$-3$`,
  analysis: `原式 $=\\lim\\limits_{x\\to 0^{+}}\\dfrac{\\dfrac{1}{2}x^{2}}{\\left[1+\\dfrac{1}{2}(-x)+\\dfrac{-1}{8}(-x)^{2}+o\\left(x^{2}\\right)\\right]-\\left[1-\\dfrac{1}{2}x+\\dfrac{1}{24}x^{2}+o\\left(x^{2}\\right)\\right]}$<br>$=\\lim\\limits_{x\\to 0^{+}}\\dfrac{\\dfrac{1}{2}x^{2}}{-\\dfrac{1}{6}x^{2}+o\\left(x^{2}\\right)}=-3$.`
});
QUESTION_BANK.push({
  id: 'c3q5',
  chapter: 'ch3',
  no: 5,
  type: 'open',
  difficulty: 2,
  points: ['泰勒展开', '等价无穷小'],
  stem: `计算极限：$\\lim\\limits_{x\\to 0}\\dfrac{1+\\dfrac{1}{2}x^{2}-\\sqrt{1+x^{2}}}{\\left(\\cos x-e^{x^{2}}\\right)\\sin x^{2}}$`,
  answer: `$-\\dfrac{1}{12}$`,
  analysis: `原式 $=\\lim\\limits_{x\\to 0}\\dfrac{1+\\dfrac{1}{2}x^{2}-\\sqrt{1+x^{2}}}{\\left(\\cos x-e^{x^{2}}\\right)x^{2}}=\\lim\\limits_{x\\to 0}\\dfrac{1+\\dfrac{1}{2}x^{2}-\\sqrt{1+x^{2}}}{\\left[(\\cos x-1)+\\left(1-e^{x^{2}}\\right)\\right]x^{2}}$<br>$=\\lim\\limits_{x\\to 0}\\dfrac{1+\\dfrac{1}{2}x^{2}-\\left[1+\\dfrac{1}{2}x^{2}-\\dfrac{1}{8}x^{4}+o\\left(x^{4}\\right)\\right]}{\\left[-\\dfrac{1}{2}x^{2}+\\left(-x^{2}\\right)\\right]\\cdot x^{2}}$<br>$=\\lim\\limits_{x\\to 0}\\dfrac{\\dfrac{1}{8}x^{4}+o\\left(x^{4}\\right)}{-\\dfrac{3}{2}x^{4}}=-\\dfrac{1}{12}$.`
});
QUESTION_BANK.push({
  id: 'c3q6',
  chapter: 'ch3',
  no: 6,
  type: 'open',
  difficulty: 2,
  points: ['倒代换', '等价无穷小'],
  stem: `计算极限：$\\lim\\limits_{x\\to +\\infty}\\left(\\sqrt[3]{x^{3}+2x^{2}+1}-x e^{\\frac{1}{x}}\\right)$`,
  answer: `$-\\dfrac{1}{3}$`,
  analysis: `原式 $=\\lim\\limits_{x\\to +\\infty}x\\left(\\sqrt[3]{1+\\dfrac{2}{x}+\\dfrac{1}{x^{3}}}-e^{\\frac{1}{x}}\\right)$<br>$\\xlongequal{\\text{令 }x=\\frac{1}{t}}\\lim\\limits_{t\\to 0^{+}}\\dfrac{\\sqrt[3]{1+2t+t^{3}}-e^{t}}{t}=\\lim\\limits_{t\\to 0^{+}}\\dfrac{\\sqrt[3]{1+2t+t^{3}}-1+1-e^{t}}{t}$<br>$=\\lim\\limits_{t\\to 0^{+}}\\dfrac{\\sqrt[3]{1+2t+t^{3}}-1}{t}-\\lim\\limits_{t\\to 0^{+}}\\dfrac{e^{t}-1}{t}$<br>$=\\lim\\limits_{t\\to 0^{+}}\\dfrac{\\dfrac{1}{3}\\left(2t+t^{3}\\right)}{t}-\\lim\\limits_{t\\to 0^{+}}\\dfrac{t}{t}$<br>$=\\dfrac{2}{3}-1=-\\dfrac{1}{3}$.`
});
QUESTION_BANK.push({
  id: 'c3q7',
  chapter: 'ch3',
  no: 7,
  type: 'open',
  difficulty: 2,
  points: ['幂指函数', '等价无穷小'],
  stem: `计算极限：$\\lim\\limits_{x\\to 0}\\dfrac{(1+x)^{\\frac{1}{x}}+e^{x}-e-1}{\\ln\\left(x+\\sqrt{1+x^{2}}\\right)}$`,
  answer: `$-\\dfrac{1}{2}e+1$`,
  analysis: `因为当 $x\\to 0$ 时，$\\ln\\left(x+\\sqrt{1+x^{2}}\\right)\\sim x$，$e^{x}-1\\sim x$，所以<br>原式 $=\\lim\\limits_{x\\to 0}\\dfrac{(1+x)^{\\frac{1}{x}}+e^{x}-e-1}{x}=\\lim\\limits_{x\\to 0}\\dfrac{(1+x)^{\\frac{1}{x}}-e}{x}+\\lim\\limits_{x\\to 0}\\dfrac{e^{x}-1}{x}$<br>$=\\lim\\limits_{x\\to 0}\\dfrac{e^{\\frac{\\ln(1+x)}{x}}-e}{x}+\\lim\\limits_{x\\to 0}\\dfrac{x}{x}=e\\lim\\limits_{x\\to 0}\\dfrac{e^{\\frac{\\ln(1+x)}{x}-1}-1}{x}+1$<br>$=e\\lim\\limits_{x\\to 0}\\dfrac{\\dfrac{\\ln(1+x)}{x}-1}{x}+1$<br>$=e\\lim\\limits_{x\\to 0}\\dfrac{\\ln(1+x)-x}{x^{2}}+1$<br>$=e\\lim\\limits_{x\\to 0}\\dfrac{-\\dfrac{1}{2}x^{2}}{x^{2}}+1=-\\dfrac{1}{2}e+1$.`
});
QUESTION_BANK.push({
  id: 'c3q8',
  chapter: 'ch3',
  no: 8,
  type: 'open',
  difficulty: 1,
  tag: '2025真题',
  points: ['幂指函数', '等价无穷小'],
  stem: `（2025 年真题）计算极限：$\\lim\\limits_{x\\to 0^{+}}\\dfrac{x^{x}-1}{\\ln x\\cdot\\ln(1-x)}$`,
  answer: `$-1$`,
  analysis: `由于 $\\lim\\limits_{x\\to 0^{+}}x\\ln x=0$，所以<br>$\\lim\\limits_{x\\to 0^{+}}\\dfrac{x^{x}-1}{\\ln x\\cdot\\ln(1-x)}=\\lim\\limits_{x\\to 0^{+}}\\dfrac{e^{x\\ln x}-1}{-x\\ln x}=-\\lim\\limits_{x\\to 0^{+}}\\dfrac{x\\ln x}{x\\ln x}=-1$.`
});
QUESTION_BANK.push({
  id: 'c3q9',
  chapter: 'ch3',
  no: 9,
  type: 'open',
  difficulty: 2,
  tag: '2023真题',
  points: ['倒代换', '等价无穷小', '洛必达法则'],
  stem: `（2023 年真题）计算极限：$\\lim\\limits_{x\\to\\infty}x^{2}\\left(2-x\\sin\\dfrac{1}{x}-\\cos\\dfrac{1}{x}\\right)$`,
  answer: `$\\dfrac{2}{3}$`,
  analysis: `方法一：令 $t=\\dfrac{1}{x}$，则<br>$\\lim\\limits_{x\\to\\infty}x^{2}\\left(2-x\\sin\\dfrac{1}{x}-\\cos\\dfrac{1}{x}\\right)=\\lim\\limits_{t\\to 0}\\dfrac{1-\\cos t+1-\\dfrac{\\sin t}{t}}{t^{2}}$<br>$=\\lim\\limits_{t\\to 0}\\left(\\dfrac{1-\\cos t}{t^{2}}+\\dfrac{t-\\sin t}{t^{3}}\\right)$<br>$=\\dfrac{1}{2}+\\lim\\limits_{t\\to 0}\\dfrac{1-\\cos t}{3t^{2}}$<br>$=\\dfrac{1}{2}+\\dfrac{1}{6}=\\dfrac{2}{3}$.<br>方法二：$\\lim\\limits_{x\\to\\infty}x^{2}\\left(2-x\\sin\\dfrac{1}{x}-\\cos\\dfrac{1}{x}\\right)=\\lim\\limits_{x\\to\\infty}x^{2}\\left(1-\\cos\\dfrac{1}{x}\\right)+\\lim\\limits_{x\\to\\infty}x^{2}\\left(1-x\\sin\\dfrac{1}{x}\\right)$<br>$=\\lim\\limits_{x\\to\\infty}x^{2}\\cdot\\dfrac{1}{2}\\left(\\dfrac{1}{x}\\right)^{2}+\\lim\\limits_{x\\to\\infty}x^{2}\\cdot x\\left(\\dfrac{1}{x}-\\sin\\dfrac{1}{x}\\right)$<br>$=\\lim\\limits_{x\\to\\infty}x^{2}\\cdot x\\cdot\\dfrac{1}{6}\\left(\\dfrac{1}{x}\\right)^{3}$<br>$=\\dfrac{1}{2}+\\dfrac{1}{6}=\\dfrac{2}{3}$.`
});
QUESTION_BANK.push({
  id: 'c3q10',
  chapter: 'ch3',
  no: 10,
  type: 'open',
  difficulty: 1,
  points: ['幂指函数', '1^∞型'],
  stem: `计算极限：$\\lim\\limits_{x\\to\\infty}\\left(\\sin\\dfrac{2}{x}+\\cos\\dfrac{1}{x}\\right)^{x}$`,
  answer: `$e^{2}$`,
  analysis: `本题是“$1^{\\infty}$”型未定式极限，于是<br>$\\lim\\limits_{x\\to\\infty}\\left(\\sin\\dfrac{2}{x}+\\cos\\dfrac{1}{x}\\right)^{x}=e^{\\lim\\limits_{x\\to\\infty}x\\left(\\sin\\frac{2}{x}+\\cos\\frac{1}{x}-1\\right)}\\xlongequal{\\text{令 }t=\\frac{1}{x}}e^{\\lim\\limits_{t\\to 0}\\frac{\\sin 2t+\\cos t-1}{t}}=e^{\\lim\\limits_{t\\to 0}\\frac{\\sin 2t}{t}}=e^{2}$.`
});
QUESTION_BANK.push({
  id: 'c3q11',
  chapter: 'ch3',
  no: 11,
  type: 'open',
  difficulty: 2,
  points: ['幂指函数', '等价无穷小'],
  stem: `计算极限：$\\lim\\limits_{x\\to 0}\\dfrac{1}{x^{3}}\\left[\\left(\\dfrac{2+\\cos x}{3}\\right)^{x}-1\\right]$`,
  answer: `$-\\dfrac{1}{6}$`,
  analysis: `原式 $=\\lim\\limits_{x\\to 0}\\dfrac{e^{x\\ln\\frac{2+\\cos x}{3}}-1}{x^{3}}=\\lim\\limits_{x\\to 0}\\dfrac{x\\ln\\dfrac{2+\\cos x}{3}}{x^{3}}$<br>$=\\lim\\limits_{x\\to 0}\\dfrac{\\ln\\left(1+\\dfrac{\\cos x-1}{3}\\right)}{x^{2}}$<br>$=\\lim\\limits_{x\\to 0}\\dfrac{\\dfrac{\\cos x-1}{3}}{x^{2}}=\\lim\\limits_{x\\to 0}\\dfrac{-\\dfrac{1}{2}x^{2}}{3x^{2}}=-\\dfrac{1}{6}$.`
});
QUESTION_BANK.push({
  id: 'c3q12',
  chapter: 'ch3',
  no: 12,
  type: 'open',
  difficulty: 2,
  points: ['幂指函数', '1^∞型'],
  stem: `计算极限：$\\lim\\limits_{x\\to 0}\\left[\\tan\\left(\\dfrac{\\pi}{4}-x\\right)\\right]^{\\cot x}$`,
  answer: `$e^{-2}$`,
  analysis: `本题是“$1^{\\infty}$”型未定式极限，于是<br>$\\lim\\limits_{x\\to 0}\\left[\\tan\\left(\\dfrac{\\pi}{4}-x\\right)\\right]^{\\cot x}=e^{\\lim\\limits_{x\\to 0}\\cot x\\left[\\tan\\left(\\frac{\\pi}{4}-x\\right)-1\\right]}$,<br>其中<br>$\\lim\\limits_{x\\to 0}\\cot x\\left[\\tan\\left(\\dfrac{\\pi}{4}-x\\right)-1\\right]=\\lim\\limits_{x\\to 0}\\dfrac{\\cos x}{\\sin x}\\left[\\tan\\left(\\dfrac{\\pi}{4}-x\\right)-1\\right]=\\lim\\limits_{x\\to 0}\\dfrac{\\tan\\left(\\dfrac{\\pi}{4}-x\\right)-1}{x}$<br>$=-\\lim\\limits_{x\\to 0}\\sec^{2}\\left(\\dfrac{\\pi}{4}-x\\right)=-2$,<br>因此，可求得原式 $=e^{-2}$.`
});
QUESTION_BANK.push({
  id: 'c3q13',
  chapter: 'ch3',
  no: 13,
  type: 'open',
  difficulty: 3,
  points: ['幂指函数', '1^∞型', '等价无穷小'],
  stem: `计算极限：$\\lim\\limits_{x\\to 0}\\left(\\dfrac{1+\\sin x\\cos 2x}{1+\\sin x\\cos 3x}\\right)^{\\cot^{3} x}$`,
  answer: `$e^{\\frac{5}{2}}$`,
  analysis: `本题是“$1^{\\infty}$”型未定式极限，于是<br>$\\lim\\limits_{x\\to 0}\\left(\\dfrac{1+\\sin x\\cos 2x}{1+\\sin x\\cos 3x}\\right)^{\\cot^{3} x}=e^{\\lim\\limits_{x\\to 0}\\cot^{3} x\\left(\\frac{1+\\sin x\\cos 2x}{1+\\sin x\\cos 3x}-1\\right)}$,<br>其中<br>$\\lim\\limits_{x\\to 0}\\cot^{3} x\\left(\\dfrac{1+\\sin x\\cos 2x}{1+\\sin x\\cos 3x}-1\\right)=\\lim\\limits_{x\\to 0}\\dfrac{\\cos^{3} x}{\\sin^{3} x}\\cdot\\dfrac{\\sin x\\cos 2x-\\sin x\\cos 3x}{1+\\sin x\\cos 3x}$<br>$=\\lim\\limits_{x\\to 0}\\dfrac{\\sin x\\cos 2x-\\sin x\\cos 3x}{x^{3}}$<br>$=\\lim\\limits_{x\\to 0}\\dfrac{\\sin x(\\cos 2x-\\cos 3x)}{x^{3}}$<br>$=\\lim\\limits_{x\\to 0}\\dfrac{\\cos 2x-1+1-\\cos 3x}{x^{2}}$<br>$=\\lim\\limits_{x\\to 0}\\dfrac{\\cos 2x-1}{x^{2}}+\\lim\\limits_{x\\to 0}\\dfrac{1-\\cos 3x}{x^{2}}$<br>$=\\lim\\limits_{x\\to 0}\\dfrac{-\\dfrac{1}{2}(2x)^{2}}{x^{2}}+\\lim\\limits_{x\\to 0}\\dfrac{\\dfrac{1}{2}(3x)^{2}}{x^{2}}=-2+\\dfrac{9}{2}=\\dfrac{5}{2}$,<br>所以，原式 $=e^{\\frac{5}{2}}$.`
});
QUESTION_BANK.push({
  id: 'c4q1',
  chapter: 'ch4',
  no: 1,
  type: 'open',
  difficulty: 1,
  points: ['连续性定义', '导数定义'],
  stem: `请填写下面的基础知识，可以有效帮助大家回顾并掌握问题处理的核心框架.<br>1. 利用定义法判定函数的连续性<br>（1）若不需要分左右极限时：______.<br>（2）若需要分左右极限时：______.<br>2. 利用定义法判定函数的可导性<br>（1）若不需要分左右极限时：<br>①利用计算型定义：______.<br>②利用推广型定义：______.<br>（2）若需要分左右极限时：<br>①利用计算型定义：______.<br>②利用推广型定义：______.`,
  answer: `见解析`,
  analysis: `1. 利用定义法判定函数的连续性<br>（1）若不需要分左右极限时：判断是否满足 $\\lim\\limits_{x\\to x_0}f(x)=f(x_0)$.<br>（2）若需要分左右极限时：判断是否满足 $\\lim\\limits_{x\\to x_0^-}f(x)=\\lim\\limits_{x\\to x_0^+}f(x)=f(x_0)$.<br>2. 利用定义法判定函数的可导性<br>（1）若不需要分左右极限时：<br>①利用计算型定义：检查极限 $f'(x_0)=\\lim\\limits_{x\\to x_0}\\dfrac{f(x)-f(x_0)}{x-x_0}$ 是否存在.<br>②利用推广型定义：检查极限 $f'(x_0)=\\lim\\limits_{\\square\\to 0}\\dfrac{f(x_0+\\square)-f(x_0)}{\\square}$ 是否存在.<br>（2）若需要分左右极限时：<br>①利用计算型定义：检查左导数与右导数是否均存在且相等，即：$$f_+'(x_0)=\\lim\\limits_{x\\to x_0^+}\\frac{f(x)-f(x_0)}{x-x_0},\\quad f_-'(x_0)=\\lim\\limits_{x\\to x_0^-}\\frac{f(x)-f(x_0)}{x-x_0},$$且 $f_+'(x_0)=f_-'(x_0)$.<br>②利用推广型定义：检查左导数与右导数是否均存在且相等，即：$$f_+'(x_0)=\\lim\\limits_{\\square\\to 0^+}\\frac{f(x_0+\\square)-f(x_0)}{\\square},\\quad f_-'(x_0)=\\lim\\limits_{\\square\\to 0^-}\\frac{f(x_0+\\square)-f(x_0)}{\\square},$$且 $f'(x_0)=\\lim\\limits_{\\square\\to 0}\\dfrac{f(x_0+\\square)-f(x_0)}{\\square}$.`
});
QUESTION_BANK.push({
  id: 'c4q2',
  chapter: 'ch4',
  no: 2,
  type: 'open',
  difficulty: 3,
  points: ['导数定义', '洛必达法则'],
  stem: `（简单问题看思路）请思考下列解答方法中是否存在错误. 如果存在错误，请给出正确的解题过程.<br>（1）已知 $f(x)$ 在 $x=3$ 处连续，且 $\\lim\\limits_{x\\to 3}\\dfrac{f(x)}{x^2-9}=2$，求 $f'(3)$.<br>解答过程：利用洛必达法则，有$$\\lim\\limits_{x\\to 3}\\frac{f(x)}{x^2-9}=\\lim\\limits_{x\\to 3}\\frac{f'(x)}{2x}=\\frac{1}{6}f'(3)=2,$$于是 $f'(3)=12$.<br>（2）已知 $f(x)$ 在 $x=3$ 处可导，且 $\\lim\\limits_{x\\to 3}\\dfrac{f(x)}{x^2-9}=2$，求 $f'(3)$.<br>解答过程：利用洛必达法则，有$$\\lim\\limits_{x\\to 3}\\frac{f(x)}{x^2-9}=\\lim\\limits_{x\\to 3}\\frac{f'(x)}{2x}=\\frac{1}{6}f'(3)=2,$$于是 $f'(3)=12$.<br>（3）已知 $f(x)$ 在 $x=3$ 处导函数连续，且 $\\lim\\limits_{x\\to 3}\\dfrac{f(x)}{x^2-9}=2$，求 $f'(3)$.<br>解答过程：利用洛必达法则，有$$\\lim\\limits_{x\\to 3}\\frac{f(x)}{x^2-9}=\\lim\\limits_{x\\to 3}\\frac{f'(x)}{2x}=\\frac{1}{6}f'(3)=2,$$于是 $f'(3)=12$.`,
  answer: `三小问结果均为 $f'(3)=12$；其中（1）（2）的解法错误（不能用洛必达法则，应凑导数定义），（3）的解法正确.`,
  analysis: `（1）诊断：方法错误.<br>原因分析：题目仅告知 $f(x)$ 在 $x=3$ 处“连续”，我们完全不知道它在 $x=3$ 附近是否可导，更不知道 $\\lim\\limits_{x\\to 3}f'(x)$ 是否存在. 因此不能使用洛必达法则.<br>正确解答：凑导数定义.<br>由于 $\\lim\\limits_{x\\to 3}\\dfrac{f(x)}{x^2-9}=2$，且 $\\lim\\limits_{x\\to 3}\\left(x^2-9\\right)=0$，于是 $\\lim\\limits_{x\\to 3}f(x)=0$.<br>又因为 $f(x)$ 在 $x=3$ 处连续，于是 $\\lim\\limits_{x\\to 3}f(x)=f(3)$，于是 $f(3)=0$.<br>进而，利用导数定义知$$\\begin{aligned}\\lim\\limits_{x\\to 3}\\frac{f(x)}{x^2-9}&=\\lim\\limits_{x\\to 3}\\left[\\frac{f(x)-f(3)}{x-3}\\cdot\\frac{1}{x+3}\\right]\\\\&=\\lim\\limits_{x\\to 3}\\frac{f(x)-f(3)}{x-3}\\cdot\\lim\\limits_{x\\to 3}\\frac{1}{x+3}\\\\&=f'(3)\\cdot\\frac{1}{6}=2,\\end{aligned}$$于是解得 $f'(3)=12$.<br>（2）诊断：方法错误.<br>原因分析：题目告知 $f(x)$ 在 $x=3$ 处“可导”，这仅仅意味着 $f(x)$ 在这一个点上有导数，并不能保证在 $x=3$ 的去心邻域内可导，也无法保证导函数在 $x=3$ 处连续（即无法得出 $\\lim\\limits_{x\\to 3}f'(x)=f'(3)$）. 因此，不能使用洛必达法则.<br>正确解答：凑导数定义.<br>由于 $\\lim\\limits_{x\\to 3}\\dfrac{f(x)}{x^2-9}=2$，且 $\\lim\\limits_{x\\to 3}\\left(x^2-9\\right)=0$，于是 $\\lim\\limits_{x\\to 3}f(x)=0$.<br>又因为 $f(x)$ 在 $x=3$ 处连续，于是 $\\lim\\limits_{x\\to 3}f(x)=f(3)$，于是 $f(3)=0$.<br>进而，利用导数定义知$$\\begin{aligned}\\lim\\limits_{x\\to 3}\\frac{f(x)}{x^2-9}&=\\lim\\limits_{x\\to 3}\\left[\\frac{f(x)-f(3)}{x-3}\\cdot\\frac{1}{x+3}\\right]\\\\&=\\lim\\limits_{x\\to 3}\\frac{f(x)-f(3)}{x-3}\\cdot\\lim\\limits_{x\\to 3}\\frac{1}{x+3}\\\\&=f'(3)\\cdot\\frac{1}{6}=2,\\end{aligned}$$于是解得 $f'(3)=12$.<br>（3）诊断：方法正确.<br>原因分析：题目明确告知 $f(x)$ 在 $x=3$ 处导函数连续. 这意味着：<br>① $f(x)$ 在 $x=3$ 的邻域内导函数存在（满足洛必达法则的第二个要求）；<br>② 由于导函数连续，必然有 $\\lim\\limits_{x\\to 3}f'(x)=f'(3)$.<br>因此，原解答中 $\\lim\\limits_{x\\to 3}\\dfrac{f'(x)}{2x}=\\dfrac{1}{6}f'(3)=2$ 这一步在严谨的数学逻辑上是完全成立的，使用洛必达法则没有问题.`
});
QUESTION_BANK.push({
  id: 'c4q3',
  chapter: 'ch4',
  no: 3,
  type: 'open',
  difficulty: 2,
  points: ['导数定义'],
  stem: `请判断下列关于导数定义的推论是否存在错误，并说明详细理由.<br>（1）若 $\\lim\\limits_{x\\to 0}\\dfrac{f(x_0+ax)-f(x_0+bx)}{x}$ 存在，则 $f'(x_0)$ 存在.<br>（2）若 $f'(x_0)$ 存在，则 $\\lim\\limits_{x\\to 0}\\dfrac{f(x_0+ax)-f(x_0+bx)}{x}$ 存在，且结果为 $(a-b)f'(x_0)$.`,
  answer: `（1）错误；（2）正确.`,
  analysis: `（1）错误；（2）正确.<br>解题过程参考课堂例 2.12（D）选项以及例 2.13 的总结部分.`
});
QUESTION_BANK.push({
  id: 'c4q4',
  chapter: 'ch4',
  no: 4,
  type: 'open',
  difficulty: 2,
  tag: '2022真题',
  points: ['隐函数求导'],
  stem: `（2022 年真题）已知函数 $y=y(x)$ 由方程 $x^2+xy+y^3=3$ 确定，则 $y''(1)=$ ______.`,
  answer: `$-\\dfrac{31}{32}$`,
  analysis: `因为函数 $y=y(x)$ 由方程 $x^2+xy+y^3=3$ 确定，即$$x^2+xy(x)+y^3(x)=3, \\tag{1}$$两端对 $x$ 求两次导数，得$$2x+y(x)+xy'(x)+3y^2(x)y'(x)=0, \\tag{2}$$$$2+2y'(x)+\\left[x+3y^2(x)\\right]y''(x)+6y(x)\\left[y'(x)\\right]^2=0. \\tag{3}$$<br>由 (1) 得 $y(1)+y^3(1)=2$，所以 $y(1)=1$.<br>由 (2) 得 $y(1)+4y'(1)=-2$，所以 $y'(1)=-\\dfrac{3}{4}$.<br>由 (3) 得 $2+2y'(1)+\\left[1+3y^2(1)\\right]y''(1)+6y(1)\\left[y'(1)\\right]^2=0$，解得 $y''(1)=-\\dfrac{31}{32}$.`
});
QUESTION_BANK.push({
  id: 'c4q5',
  chapter: 'ch4',
  no: 5,
  type: 'open',
  difficulty: 2,
  tag: '仅数学一、二',
  points: ['参数方程求导'],
  stem: `（仅数学一、数学二要求）曲线 $\\begin{cases}x=2(t-\\sin t),\\\\ y=2(1-\\cos t),\\end{cases}$ 在 $t=\\dfrac{\\pi}{2}$ 处的切线与 $x$ 轴的交点坐标为 ______.`,
  answer: `$(\\pi-4,\\,0)$`,
  analysis: `$\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=\\dfrac{y'(t)}{x'(t)}=\\dfrac{2\\sin t}{2(1-\\cos t)}$.<br>当 $t=\\dfrac{\\pi}{2}$ 时，$x_0=2\\left(\\dfrac{\\pi}{2}-1\\right)$，$y_0=2$，$\\left.\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\right|_{t=\\frac{\\pi}{2}}=1$.<br>于是，所求切线方程为$$y=2+1\\cdot\\left[x-(\\pi-2)\\right],$$整理得 $y=x+4-\\pi$.<br>令 $y=0$ 时，解得 $x=\\pi-4$.<br>因此，所求交点坐标为 $(\\pi-4,\\,0)$.`
});
QUESTION_BANK.push({
  id: 'c4q6',
  chapter: 'ch4',
  no: 6,
  type: 'open',
  difficulty: 3,
  tag: '2026真题改编',
  points: ['反函数求导'],
  stem: `（2026 年真题改编，认真思考，本题解决反函数这一问题即可全部拿下）已知函数 $f(x)=x-\\sin x+\\mathrm{e}^{2x}$，设 $g(x)$ 为 $f(x)$ 的反函数，试求 $g(1)$，$g'(1)$ 以及 $g''(1)$.`,
  answer: `$g(1)=0,\\ g'(1)=\\dfrac{1}{2},\\ g''(1)=-\\dfrac{1}{2}$`,
  analysis: `根据反函数与原函数的对应关系，反函数的自变量对应原函数的值. 欲求 $g(1)$，即寻找满足 $f(x)=1$ 的 $x$ 值，即$$f(x)=x-\\sin x+\\mathrm{e}^{2x}=1,$$显然，通过观察可知，当 $x=0$ 时等式成立，故 $g(1)=0$.<br>又因为原函数的一阶导数与二阶导数分别为$$f'(x)=1-\\cos x+2\\mathrm{e}^{2x},\\quad f''(x)=\\sin x+4\\mathrm{e}^{2x},$$所以根据反函数的导数计算公式知$$g'(x)=\\frac{1}{f'(x)}=\\frac{1}{1-\\cos x+2\\mathrm{e}^{2x}},$$$$g''(x)=-\\frac{f''(x)}{\\left[f'(x)\\right]^3}=-\\frac{\\sin x+4\\mathrm{e}^{4x}}{\\left(1-\\cos x+2\\mathrm{e}^{2x}\\right)^3},$$<br>[存疑：图中该式分子显示为 $\\sin x+4\\mathrm{e}^{4x}$，但按前文 $f''(x)=\\sin x+4\\mathrm{e}^{2x}$，数学上分子应为 $\\sin x+4\\mathrm{e}^{2x}$；疑为原稿笔误]<br>于是$$g'(1)=\\frac{1}{f'(0)}=\\frac{1}{1-\\cos x+2\\mathrm{e}^{2x}}\\Big|_{x=0}=\\frac{1}{2},$$$$g''(1)=-\\frac{f''(0)}{\\left[f'(0)\\right]^3}=-\\frac{\\sin x+4\\mathrm{e}^{4x}}{\\left(1-\\cos x+2\\mathrm{e}^{2x}\\right)^3}\\Big|_{x=0}=-\\frac{4}{8}=-\\frac{1}{2}.$$<br>[存疑：同上，分子中 $\\mathrm{e}^{4x}$ 按数学语义应为 $\\mathrm{e}^{2x}$；代入 $x=0$ 后两者数值相同，最终结果不受影响]`
});
QUESTION_BANK.push({
  id: 'c4q7',
  chapter: 'ch4',
  no: 7,
  type: 'open',
  difficulty: 2,
  tag: '2022真题',
  points: ['导数定义'],
  stem: `（2022 年真题，重点题再复盘）已知函数 $f(x)$ 在 $x=1$ 处可导，且 $\\lim\\limits_{x\\to 0}\\dfrac{f\\!\\left(\\mathrm{e}^{x^2}\\right)-3f\\!\\left(1+\\sin^2 x\\right)}{x^2}=2$，求 $f'(1)$ 以及 $f(x)$ 在 $x=1$ 处切线方程.`,
  answer: `$f'(1)=-1$；切线方程为 $y=1-x$`,
  analysis: `由 $\\lim\\limits_{x\\to 0}\\dfrac{f\\!\\left(\\mathrm{e}^{x^2}\\right)-3f\\!\\left(1+\\sin^2 x\\right)}{x^2}=2$，可知$$\\lim\\limits_{x\\to 0}\\left[f\\!\\left(\\mathrm{e}^{x^2}\\right)-3f\\!\\left(1+\\sin^2 x\\right)\\right]=0.$$<br>又 $f(x)$ 在 $x=1$ 处可导，所以 $f(x)$ 在 $x=1$ 处连续，从而$$\\lim\\limits_{x\\to 0}\\left[f\\!\\left(\\mathrm{e}^{x^2}\\right)-3f\\!\\left(1+\\sin^2 x\\right)\\right]=f(1)-3f(1)=-2f(1).$$解得 $f(1)=0$.<br>于是$$\\begin{aligned}&\\lim\\limits_{x\\to 0}\\frac{f\\!\\left(\\mathrm{e}^{x^2}\\right)-3f\\!\\left(1+\\sin^2 x\\right)}{x^2}\\\\=&\\lim\\limits_{x\\to 0}\\left[\\frac{f\\!\\left(\\mathrm{e}^{x^2}\\right)-f(1)}{\\mathrm{e}^{x^2}-1}\\cdot\\frac{\\mathrm{e}^{x^2}-1}{x^2}-3\\,\\frac{f\\!\\left(1+\\sin^2 x\\right)-f(1)}{\\sin^2 x}\\cdot\\frac{\\sin^2 x}{x^2}\\right]\\\\=&\\,f'(1)-3f'(1)=-2f'(1).\\end{aligned}$$<br>综上所述，$f'(1)=-1$.<br>从而，$f(x)$ 在 $x=1$ 处切线方程为 $y=-1\\cdot(x-1)$，整理得 $y=1-x$.`
});
QUESTION_BANK.push({
  id: 'c4q8',
  chapter: 'ch4',
  no: 8,
  type: 'open',
  difficulty: 3,
  tag: '2009真题',
  points: ['洛必达法则', '导数定义'],
  stem: `（单侧导数极限定理，2009 年真题）证明：若函数 $f(x)$ 在 $x=0$ 处连续，在 $(0,\\delta)\\,(\\delta>0)$ 内可导，且 $\\lim\\limits_{x\\to 0^+}f'(x)=A$，则 $f_+'(0)$ 存在，且 $f_+'(0)=A$.`,
  answer: `证明成立，$f_+'(0)=A$（证明过程见解析）.`,
  analysis: `【证明】根据右导数的定义，我们需要计算极限 $f_+'(0)=\\lim\\limits_{x\\to 0^+}\\dfrac{f(x)-f(0)}{x}$.<br>因为函数 $f(x)$ 在 $x=0$ 处连续，所以 $\\lim\\limits_{x\\to 0^+}f(x)=f(0)$，即分子 $\\lim\\limits_{x\\to 0^+}\\left[f(x)-f(0)\\right]=0$. 因此所求该极限属于标准的“$\\dfrac{0}{0}$”型未定式极限.<br>又由题设知，$f(x)$ 在 $(0,\\delta)\\,(\\delta>0)$ 内可导，且导数极限 $\\lim\\limits_{x\\to 0^+}f'(x)=A$ 存在，这完全满足洛必达法则的三个使用条件.<br>于是根据导数定义与洛必达法则，有$$f_+'(0)=\\lim\\limits_{x\\to 0^+}\\frac{f(x)-f(0)}{x}=\\lim\\limits_{x\\to 0^+}f'(x)=A,$$得证.`
});

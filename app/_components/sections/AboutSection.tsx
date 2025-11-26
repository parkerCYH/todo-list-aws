import { Card, CardContent } from '@/components/ui/card';
import { Code2, Palette, Lightbulb } from 'lucide-react';

export default function AboutSection() {
    return (
        <section id="about" className="py-20 px-4 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">關於我</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        我是一名充滿熱情的全端開發者，擁有豐富的前後端開發經驗，致力於創造出優質的數位產品並解決實際問題。我結合技術與設計的力量，為使用者創造更好的體驗。
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    <Card className="text-center">
                        <CardContent className="pt-8 pb-6">
                            <div className="flex justify-center mb-4">
                                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                                    <Code2 className="w-8 h-8 text-gray-700" />
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">開發</h3>
                            <p className="text-gray-600 text-sm">
                                使用現代化技術打造高效能的網頁應用程式
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="text-center">
                        <CardContent className="pt-8 pb-6">
                            <div className="flex justify-center mb-4">
                                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                                    <Palette className="w-8 h-8 text-gray-700" />
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">設計</h3>
                            <p className="text-gray-600 text-sm">
                                創造直覺且美觀的使用者介面與使用體驗
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="text-center">
                        <CardContent className="pt-8 pb-6">
                            <div className="flex justify-center mb-4">
                                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                                    <Lightbulb className="w-8 h-8 text-gray-700" />
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">創新</h3>
                            <p className="text-gray-600 text-sm">
                                持續探索新技術與創意解決方案來解決問題
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}

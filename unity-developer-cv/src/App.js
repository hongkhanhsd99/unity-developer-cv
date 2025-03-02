import React from 'react';
import {  Mail, MapPin, Phone, ExternalLink, QrCode } from 'lucide-react';

const CV = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white min-h-screen p-8 shadow-lg">
      {/* Header */}
      <header className="border-b-2 border-gray-200 pb-6 mb-6">
        <div className="flex items-start gap-6">
          <div className="w-40 h-44 rounded-lg overflow-hidden bg-gray-100">
            <img
              src="/avatar.JPG"
              alt="Profile"
              className="w-full h-full object-cover"
              onError={(e) => {
                console.error('Image failed to load');
                e.target.onerror = null;
                e.target.src = "/api/placeholder/200/200";
              }}
            />
          </div>
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">LÊ HỒNG KHANH</h1>
            <h2 className="text-2xl text-blue-600 mb-4">Unity Developer</h2>
            <div className="flex flex-wrap gap-4 text-gray-600">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Hà Nội, Việt Nam</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>+84 365 729 850</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>hongkhanhsd99@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Professional Summary */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">GIỚI THIỆU</h2>
        <p className="text-gray-600">
          Unity Developer với hơn 4 năm kinh nghiệm trong phát triển game. 
          Đã phát hành thành công nhiều game mobile với tổng hơn 1 triệu lượt tải.
        </p>
      </section>

      {/* Work Experience */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">KINH NGHIỆM LÀM VIỆC</h2>
        
        <div className="mb-4">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Unity Developer</h3>
              <div className="text-gray-600">Bounce Game Studio</div>
            </div>
            <div className="text-gray-500">2022 - Hiện tại</div>
          </div>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Phát triển game mobile 2D/3D</li>
            <li>Tối ưu perfomance game</li>
          </ul>
        </div>

        <div className="mb-4">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Intern Unity Developer</h3>
              <div className="text-gray-600">ABI Game Studio</div>
            </div>
            <div className="text-gray-500">2021 - 2022</div>
          </div>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Tham gia phát triển một số game mobile 2D/3D</li>
          </ul>
        </div>
      </section>

      {/* Skills */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">KỸ NĂNG</h2>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Game Development</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded">Unity Engine</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded">C#</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded">Game Design</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded">Level Design</span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Third-party Library</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded">Applovin</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded">Adjust</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded">Admob</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded">Firebase</span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Other</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded">Git</span>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">HỌC VẤN</h2>
        
        <div className="mb-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Cử nhân Công nghệ Thông tin</h3>
              <div className="text-gray-600">Đại học Bách Khoa Hà Nội</div>
            </div>
            <div className="text-gray-500">2017 - 2021</div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">DỰ ÁN NỔI BẬT</h2>
        
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Brain Rush - Thinking Puzzle</h3>
                <p className="text-gray-600 mb-2">Game puzzle 2D cho mobile với 1,000,000+ downloads</p>
                <div className="flex flex-wrap gap-2 mb-3">
                </div>
                <div className="flex gap-3">
                  <a href="https://youtu.be/L3NguBIeBBY?si=YVmNRXDtOXEAYgRE" className="text-blue-600 hover:text-blue-800 flex items-center">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Demo Video
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Impostor vs Monster: Z Defense</h3>
                <p className="text-gray-600 mb-2">Game 2d bắn zombie</p>
                <div className="flex flex-wrap gap-2 mb-3">
                </div>
                <div className="flex gap-3">
                  <a href="https://www.youtube.com/watch?v=J9GY3wdggLs" className="text-blue-600 hover:text-blue-800 flex items-center">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Demo Video
                  </a>
                </div>
              </div>
            </div>
          </div>
           <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800">Wood Nut: Screws Puzzle</h3>
                          <p className="text-gray-600 mb-2">Game puzzle 2D giải đố</p>
                          <div className="flex flex-wrap gap-2 mb-3">
                          </div>
                          <div className="flex gap-3">
                            <a href="https://www.youtube.com/watch?v=5iqF8J8XZoY" className="text-blue-600 hover:text-blue-800 flex items-center">
                              <ExternalLink className="w-4 h-4 mr-1" />
                              Demo Video
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
         
         <div className="bg-gray-50 p-4 rounded-lg">
                     <div className="flex justify-between items-start">
                       <div>
                         <h3 className="text-xl font-semibold text-gray-800">Tank On Box</h3>
                         <p className="text-gray-600 mb-2">Game 3d bắn xe tăng</p>
                         <div className="flex flex-wrap gap-2 mb-3">
                         </div>
                         <div className="flex gap-3">
                           <a href="https://www.youtube.com/watch?v=pdEpdwePDUM" className="text-blue-600 hover:text-blue-800 flex items-center">
                             <ExternalLink className="w-4 h-4 mr-1" />
                             Demo Video
                           </a>
                         </div>
                       </div>
                     </div>
                   </div>
          
        </div>
      </section>

      {/* Portfolio QR Code */}
      <section>
        <div className="bg-blue-50 p-4 rounded-lg flex items-center gap-6">
          <div className="flex-1">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Xem Portfolio đầy đủ</h2>
            <a href="https://hongkhanhsd99.github.io/unity-developer-portfolio" className="text-blue-600 hover:text-blue-800 flex items-center mt-2">
              <ExternalLink className="w-4 h-4 mr-1" />
             https://hongkhanhsd99.github.io/unity-developer-portfolio/
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CV;
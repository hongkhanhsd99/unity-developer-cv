import React from 'react';
import {
  Download,
  ExternalLink,
  Globe,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';

const avatarUrl = process.env.PUBLIC_URL + '/avatar.JPG';
const portfolioUrl = 'https://hongkhanhsd99.github.io/unity-developer-portfolio';

const experiences = [
  {
    role: 'Unity Developer',
    company: 'Sky Game Studio',
    period: '03/2025 – Hiện tại',
    highlights: [
      'Phát triển và hoàn thiện gameplay cho game mobile bằng Unity và C#.',
      'Xây dựng, kiểm tra và điều chỉnh tính năng trực tiếp trong Unity Editor.',
      'Xây dựng playable game bằng Luna.',
    ],
  },
  {
    role: 'Unity Developer',
    company: 'Bounce Game Studio',
    period: '2022 – 03/2025',
    highlights: [
      'Tham gia phát triển, hoàn thiện và phát hành game mobile 2D/3D bằng Unity và C#.',
      'Tối ưu hiệu năng game trên thiết bị di động.',
    ],
  },
  {
    role: 'Unity Developer Intern',
    company: 'ABI Game Studio',
    period: '2021 – 2022',
    highlights: ['Tham gia phát triển các dự án game mobile 2D/3D bằng Unity.'],
  },
];

const skillGroups = [
  {
    title: 'Unity & C#',
    skills: ['Unity Engine', 'C#', 'Gameplay Programming', 'Game 2D/3D'],
  },
  {
    title: 'SDK & dịch vụ',
    skills: ['AppLovin', 'AdMob', 'Adjust', 'Firebase'],
  },
  {
    title: 'Quy trình & nền tảng',
    skills: ['Performance Optimization', 'Git', 'Android'],
  },
];

const projects = [
  {
    name: 'Jigsawdom Solitaire',
    description:
      'Game puzzle thư giãn kết hợp solitaire và jigsaw, phát hành trên Android và iOS.',
    highlights: [
      'Phát triển gameplay ghép các thẻ bài thành một tấm hình hoàn chỉnh.',
      'Xây dựng luồng tiến trình, album theo chủ đề, booster và phần thưởng hằng ngày cho trải nghiệm chơi dài hạn.',
    ],
    tags: ['Unity', 'C#', 'Card Game', 'Puzzle'],
    links: [
      {
        label: 'Google Play',
        url: 'https://play.google.com/store/apps/details?id=com.skyrise.jigsaw.solitaire.puzzle',
      },
      {
        label: 'App Store',
        url: 'https://apps.apple.com/app/id6761818277',
      },
      {
        label: 'Video demo',
        url: 'https://www.youtube.com/watch?v=yM0BWEo3ztM',
      },
    ],
  },
  {
    name: 'Dreamory: Dream Room',
    description:
      'Game puzzle sắp xếp, trang trí phòng trên Android/iOS với hơn 500.000 lượt tải.',
    highlights: [
      'Phụ trách gameplay và các hệ thống cốt lõi, ngoại trừ Team và Collection: drag & drop, kiểm tra vị trí, tiến trình nhiều scene, save/load và hệ thống level/event.',
      'Tổ chức nội dung bằng ScriptableObject và Addressables; sử dụng DOTween, Firebase, AppLovin, IAP và Localization.',
    ],
    tags: ['Unity', 'C#', 'Addressables', 'IAP', 'Localization'],
    links: [
      {
        label: 'Google Play',
        url: 'https://play.google.com/store/apps/details?id=com.game.dreamory.dream.room.decor',
      },
      {
        label: 'App Store',
        url: 'https://apps.apple.com/us/app/dreamory-dream-room/id6752017697',
      },
      {
        label: 'Video demo',
        url: 'https://www.youtube.com/watch?v=UI2k8GK4GFc&list=PLN246mPWN61EkTqWo8UIzOGqZ6AA2UXZc',
      },
    ],
  },
  {
    name: 'IQ Test: Escape Room',
    description: 'Game 3D giải đố IQ theo chủ đề escape room với hơn 100.000 lượt tải.',
    highlights: [
      'Phụ trách toàn bộ quá trình phát triển, xây dựng tương tác 3D bằng touch/raycast, logic puzzle và tiến trình cho 68 level.',
      'Tổ chức dữ liệu bằng ScriptableObject, tạo animation với DOTween; tích hợp Firebase, AppLovin và tối ưu hiệu năng mobile.',
    ],
    tags: ['Unity', 'C#', 'ScriptableObject', 'DOTween'],
    links: [
      {
        label: 'Google Play',
        url: 'https://play.google.com/store/apps/details?id=com.IQ.Test.Escape.Room',
      },
      {
        label: 'Video demo',
        url: 'https://www.youtube.com/watch?v=WdFAYtzvFjU',
      },
    ],
  },
];

const externalLinkProps = {
  target: '_blank',
  rel: 'noreferrer noopener',
};

const SectionTitle = ({ children }) => (
  <h2 className="mb-4 text-xl font-bold uppercase tracking-wide text-slate-900 sm:text-2xl">
    {children}
  </h2>
);

const Tag = ({ children }) => (
  <span className="rounded-md bg-blue-50 px-2.5 py-1 text-sm font-medium text-blue-800">
    {children}
  </span>
);

const CV = () => {
  const printCv = () => window.print();

  return (
    <main className="min-h-screen bg-slate-200 px-0 py-0 sm:px-4 sm:py-8">
      <div className="no-print mx-auto mb-3 flex max-w-4xl justify-end">
        <button
          type="button"
          onClick={printCv}
          className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          aria-label="In hoặc lưu CV dưới dạng PDF"
        >
          <Download aria-hidden="true" className="h-4 w-4" />
          In / Lưu PDF
        </button>
      </div>

      <article className="cv-shell mx-auto min-h-screen max-w-4xl bg-white p-5 shadow-xl sm:p-8 lg:p-10">
        <header className="mb-7 border-b-2 border-slate-200 pb-7">
          <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-start sm:gap-7">
            <div className="h-40 w-36 shrink-0 overflow-hidden rounded-xl bg-slate-100 shadow-sm sm:h-44 sm:w-40">
              <img
                src={avatarUrl}
                alt="Chân dung Lê Hồng Khanh"
                className="h-full w-full object-cover"
                onError={(event) => {
                  event.currentTarget.onerror = null;
                  event.currentTarget.src = '/avatar.JPG';
                }}
              />
            </div>

            <div className="min-w-0 flex-1 text-center sm:text-left">
              <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                LÊ HỒNG KHANH
              </h1>
              <p className="mt-1 text-xl font-medium text-blue-700 sm:text-2xl">
                Unity Developer
              </p>

              <div className="mt-4 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-slate-600 sm:justify-start sm:text-base">
                <span className="inline-flex items-center gap-2">
                  <MapPin aria-hidden="true" className="h-4 w-4 shrink-0" />
                  Hà Nội, Việt Nam
                </span>
                <a className="contact-link" href="tel:+84365729850">
                  <Phone aria-hidden="true" className="h-4 w-4 shrink-0" />
                  +84 365 729 850
                </a>
                <a className="contact-link break-all" href="mailto:hongkhanhsd99@gmail.com">
                  <Mail aria-hidden="true" className="h-4 w-4 shrink-0" />
                  hongkhanhsd99@gmail.com
                </a>
                <a className="contact-link" href={portfolioUrl} {...externalLinkProps}>
                  <Globe aria-hidden="true" className="h-4 w-4 shrink-0" />
                  Portfolio
                  <ExternalLink aria-hidden="true" className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </header>

        <section className="mb-7" aria-labelledby="summary-heading">
          <SectionTitle>
            <span id="summary-heading">Giới thiệu</span>
          </SectionTitle>
          <p className="leading-relaxed text-slate-600">
            Unity Developer với hơn 5 năm kinh nghiệm phát triển game mobile 2D/3D
            bằng Unity và C#. Có kinh nghiệm phát hành game, tích hợp SDK quảng cáo
            và phân tích, tối ưu hiệu năng; các sản phẩm đã đạt tổng cộng hơn 1 triệu
            lượt tải.
          </p>
        </section>

        <section className="mb-7" aria-labelledby="experience-heading">
          <SectionTitle>
            <span id="experience-heading">Kinh nghiệm làm việc</span>
          </SectionTitle>

          <div className="space-y-5">
            {experiences.map((experience) => (
              <div className="experience-item" key={`${experience.company}-${experience.period}`}>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">
                      {experience.role}
                    </h3>
                    <p className="font-medium text-blue-700">{experience.company}</p>
                  </div>
                  <p className="shrink-0 text-sm font-medium text-slate-500 sm:text-base">
                    {experience.period}
                  </p>
                </div>
                <ul className="mt-2 list-disc space-y-1 pl-5 leading-relaxed text-slate-600">
                  {experience.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-7" aria-labelledby="skills-heading">
          <SectionTitle>
            <span id="skills-heading">Kỹ năng</span>
          </SectionTitle>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h3 className="mb-2 font-semibold text-slate-900">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Tag key={skill}>{skill}</Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-7" aria-labelledby="education-heading">
          <SectionTitle>
            <span id="education-heading">Học vấn</span>
          </SectionTitle>
          <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">
                Ngành Công nghệ Thông tin
              </h3>
              <p className="text-slate-600">Đại học Bách khoa Hà Nội</p>
            </div>
            <p className="shrink-0 text-sm font-medium text-slate-500 sm:text-base">
              2017 – 2021
            </p>
          </div>
        </section>

        <section className="mb-7" aria-labelledby="projects-heading">
          <SectionTitle>
            <span id="projects-heading">Dự án nổi bật</span>
          </SectionTitle>

          <div className="project-grid grid grid-cols-1 gap-4 md:grid-cols-2">
            {projects.map((project) => (
              <article
                className="project-card flex h-full flex-col rounded-xl border border-slate-200 bg-slate-50 p-4"
                key={project.name}
              >
                <h3 className="text-lg font-semibold text-slate-900">{project.name}</h3>
                <p className="mt-1 leading-relaxed text-slate-600">{project.description}</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-slate-600">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                  {project.links.map((link) => (
                    <a
                      className="inline-flex items-center gap-1.5 font-medium text-blue-700 hover:text-blue-900 hover:underline"
                      href={link.url}
                      key={link.url}
                      {...externalLinkProps}
                    >
                      <ExternalLink aria-hidden="true" className="h-4 w-4" />
                      {link.label}
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-blue-100 bg-blue-50 p-5">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
            Portfolio đầy đủ
          </h2>
          <p className="mt-1 text-slate-600">
            Xem thêm sản phẩm và video gameplay trong portfolio trực tuyến.
          </p>
          <a
            href={portfolioUrl}
            className="mt-3 inline-flex max-w-full items-center gap-2 break-all font-semibold text-blue-700 hover:text-blue-900 hover:underline"
            {...externalLinkProps}
          >
            <ExternalLink aria-hidden="true" className="h-4 w-4 shrink-0" />
            {portfolioUrl}
          </a>
        </section>
      </article>
    </main>
  );
};

export default CV;

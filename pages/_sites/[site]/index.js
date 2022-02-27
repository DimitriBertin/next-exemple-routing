import Link from "next/link";

export default function Index({ project, domains }) {
  console.log('DOMAINS', domains)
  return (
    <div>
      <h1>Home - </h1>
      <ul>
        <li>Domain: {project.domain}</li>
        <li>ID: {project.data.id}</li>
        <li>Template: {project.data.template}</li>
        <li>
          <label htmlFor="select-lang">Lang:</label>
          <select id="select-lang">
            {project.data.langs && project.data.langs.map((lang) => (
              <option value={lang.iso} selected={lang.default} key={`${project.domain}-${lang.name}`}>{lang.name}</option>
            ))}
          </select>
        </li>
      </ul>
      <div style={{ marginTop: `100px` }}>
        <p>Changer de domaines:</p>
        <ul>
          {domains && domains.map((domain) => (
            <li key={domain.params.site}>
              <Link href={`http://${domain.params.site}.localhost:3000`}>{domain.params.site}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  const res = await fetch('http://localhost:3000/api/data')
  const { paths } = await res.json()
  return {
    paths: paths,
    fallback: "blocking",
  };
}

export const getStaticProps = async (context) => {
  // API HERE TO GET ALL DOMAIN ---
  const res = await fetch('http://localhost:3000/api/data')
  const { data, paths } = await res.json()

  const project = data.find((p) => p.domain === context.params.site);

  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      project,
      domains: paths
    },
  };
};